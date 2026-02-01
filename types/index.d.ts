import { NextRequest } from 'next/server';

declare global {
  interface RequestWithIp extends NextRequest {
    ip?: string;
  }
}

export {};
