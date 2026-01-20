from playwright.sync_api import Page, expect, sync_playwright

def verify_changes(page: Page):
    # 1. Go to the homepage
    page.goto("http://localhost:3000")

    # 2. Check Features Section (TechnologyLogos)
    # Scroll to features
    features_section = page.locator("#features")
    features_section.scroll_into_view_if_needed()

    # Check for specific technology logos
    expect(page.get_by_alt_text("WordPress")).to_be_visible()
    expect(page.get_by_alt_text("cPanel")).to_be_visible()

    # Check for LiteSpeed text logo (scoped to features section)
    expect(features_section.get_by_text("LiteSpeed", exact=True)).to_be_visible()

    # 3. Check Pricing Section
    # Find the Pricing section (it's dynamically loaded, so wait for it)

    # We need to scroll down further to trigger dynamic import
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Wait for "Completely FREE" heading to appear
    pricing_header = page.get_by_role("heading", name="Completely FREE")
    expect(pricing_header).to_be_visible()

    pricing_header.scroll_into_view_if_needed()

    # Check for the ExternalLink button "Get Started Free Now"
    cta_button = page.get_by_role("link", name="Get Started Free Now")
    expect(cta_button).to_be_visible()

    # 4. Take Screenshot of Pricing Card to verify the button
    page.screenshot(path="verification/verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        finally:
            browser.close()
