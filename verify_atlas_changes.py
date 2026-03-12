from playwright.sync_api import sync_playwright

def verify_changes(page):
    # Go to homepage
    page.goto("http://localhost:3000/")

    # Wait for the AdvantageSection to load (dynamically imported)
    page.wait_for_selector("text=The WPinEU Advantage: Engineered for Your Success")

    # Take a screenshot of the Features section
    page.evaluate("document.getElementById('features').scrollIntoView()")
    page.wait_for_timeout(1000) # wait for smooth scroll and animations
    page.screenshot(path="verification_features.png", full_page=True)

    print("Features screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_changes(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
