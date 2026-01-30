from playwright.sync_api import Page, expect, sync_playwright

def verify_changes(page: Page):
    # Verify HostingHero on /free-cpanel-hosting
    page.goto("http://localhost:3000/free-cpanel-hosting")

    # Wait for the hero to be visible
    expect(page.get_by_role("heading", name="Free cPanel Hosting")).to_be_visible()

    # Wait for the background element (we can't assert styling easily with Playwright, but we can visually check)
    # Just take a screenshot of the hero section
    page.screenshot(path="/home/jules/verification/hosting_hero.png", full_page=False)

    # Verify About section on /
    page.goto("http://localhost:3000/#about")

    # Wait for About section to be visible
    expect(page.get_by_role("heading", name="About WPinEU")).to_be_visible()

    # Take a screenshot of the about section
    # We can try to clip to the section if we can find it
    about_section = page.locator("#about")
    if about_section.count() > 0:
        about_section.screenshot(path="/home/jules/verification/about_section.png")
    else:
        page.screenshot(path="/home/jules/verification/about_section_full.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        finally:
            browser.close()
