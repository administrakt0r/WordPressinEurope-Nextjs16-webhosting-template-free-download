from playwright.sync_api import sync_playwright

def verify_navbar():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        print("Navigating to homepage...")
        page.goto("http://localhost:3000")

        print("Checking for Navbar elements...")

        # Scope to Navbar
        navbar = page.get_by_role("navigation", name="Main navigation")

        if navbar.is_visible():
            print("✅ Navbar container is visible")
        else:
            print("❌ Navbar container is NOT visible")

        # Logo inside Navbar
        logo = navbar.get_by_label("WPinEU Home")
        if logo.is_visible():
            print("✅ Logo is visible in Navbar")

        # Desktop Links
        desktop_nav = navbar.get_by_role("navigation", name="Primary navigation")
        if desktop_nav.is_visible():
             print("✅ Desktop navigation is visible")

        # Take screenshot
        page.screenshot(path="navbar_verification.png")
        print("📸 Screenshot saved to navbar_verification.png")

        browser.close()

if __name__ == "__main__":
    verify_navbar()
