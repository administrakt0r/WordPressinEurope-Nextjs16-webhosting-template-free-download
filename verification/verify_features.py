
import time
from playwright.sync_api import sync_playwright

def verify_features_animation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the page
            page.goto("http://localhost:3000")

            # Scroll to features section
            features_section = page.locator("#features")
            features_section.scroll_into_view_if_needed()

            # Wait for animations to potentially trigger
            time.sleep(2)

            # Take a screenshot of the features section
            page.screenshot(path="verification/features_optimized.png")
            print("Screenshot taken successfully")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_features_animation()
