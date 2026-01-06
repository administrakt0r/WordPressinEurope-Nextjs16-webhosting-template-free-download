from playwright.sync_api import sync_playwright

def verify_features():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the home page (assuming app runs on port 3000)
            page.goto("http://localhost:3000")

            # Wait for the features section to be visible
            page.wait_for_selector("#features")

            # Scroll to features
            page.evaluate("document.getElementById('features').scrollIntoView()")

            # Wait for animations to settle (FeatureCard uses 0.4s + delay)
            # The last card has index 5, delay 0.4s. Total around 1s.
            page.wait_for_timeout(2000)

            # Take a screenshot of the features section
            page.locator("#features").screenshot(path="verification/features_section.png")
            print("Screenshot taken: verification/features_section.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_features()
