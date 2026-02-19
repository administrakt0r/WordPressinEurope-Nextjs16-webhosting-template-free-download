import { describe, it, expect } from 'vitest';
import nextConfig from '@/next.config';
import { escapeRegExp, BLOCKED_UA_REGEX } from '@/lib/security';

describe('Security Enhancements', () => {
  it('should disable poweredByHeader', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it('should have a valid security.txt file', async () => {
    // We can't easily read public files in unit tests if they aren't imported,
    // but we can check if the file exists using fs (in node env)
    const fs = await import('fs');
    const path = await import('path');

    const securityTxtPath = path.join(process.cwd(), 'public/.well-known/security.txt');
    expect(fs.existsSync(securityTxtPath)).toBe(true);

    const content = fs.readFileSync(securityTxtPath, 'utf-8');
    expect(content).toContain('Contact: mailto:');
    expect(content).toContain('Expires:');
  });

  describe('escapeRegExp', () => {
    it('should escape special regex characters', () => {
      expect(escapeRegExp('.*+?^${}()|[]\\')).toBe('\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
    });

    it('should not alter alphanumeric strings', () => {
      expect(escapeRegExp('abc123')).toBe('abc123');
    });
  });

  describe('BLOCKED_UA_REGEX', () => {
    it('should match newly added user agents', () => {
      const newAgents = [
        'nmap',
        'nessus',
        'qualys',
        'openvas',
        'whatweb',
        'buster',
        'censys',
        'shodan',
      ];

      newAgents.forEach((agent) => {
        expect(BLOCKED_UA_REGEX.test(agent)).toBe(true);
        // Case insensitive check
        expect(BLOCKED_UA_REGEX.test(agent.toUpperCase())).toBe(true);
      });
    });

    it('should match existing user agents', () => {
       expect(BLOCKED_UA_REGEX.test('sqlmap')).toBe(true);
       expect(BLOCKED_UA_REGEX.test('nikto')).toBe(true);
    });

    it('should NOT match benign user agents', () => {
      expect(BLOCKED_UA_REGEX.test('Mozilla/5.0')).toBe(false);
      expect(BLOCKED_UA_REGEX.test('Chrome/100.0')).toBe(false);
    });

    it('should handle special characters in UA list safely', () => {
      // Create a temporary regex with a mocked list containing special chars
      // This simulates what happens in lib/security.ts
      const unsafeList = ['test(v1)', 'bad.bot'];
      const safeRegex = new RegExp(unsafeList.map(escapeRegExp).join('|'), 'i');

      expect(safeRegex.test('test(v1)')).toBe(true);
      expect(safeRegex.test('bad.bot')).toBe(true);

      // Should not match "badabot" if "bad.bot" means literal dot
      expect(safeRegex.test('badabot')).toBe(false);

      // Should match partial if not anchored (which BLOCKED_UA_REGEX is not)
      expect(safeRegex.test('User-Agent: bad.bot/1.0')).toBe(true);
    });
  });
});
