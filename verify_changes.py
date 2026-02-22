from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        try:
            # Go to home page
            print("Navigating to home page...")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for hydration
            page.wait_for_timeout(2000)

            # Scroll to Features
            print("Scrolling to Features...")
            features_section = page.locator("#features")
            features_section.scroll_into_view_if_needed()

            # Wait for animations
            page.wait_for_timeout(2000)

            # Screenshot Features
            print("Taking screenshot of Features...")
            page.screenshot(path="verification_features.png")

            # Scroll to Pricing
            print("Scrolling to Pricing...")
            pricing_section = page.locator("#pricing")
            pricing_section.scroll_into_view_if_needed()

            # Wait for animations
            page.wait_for_timeout(2000)

            # Screenshot Pricing
            print("Taking screenshot of Pricing...")
            page.screenshot(path="verification_pricing.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
