from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000")
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for Navbar to be visible
            page.wait_for_selector("nav[aria-label='Main navigation']")
            print("Navbar found")

            # Take screenshot of the top part of the page
            page.screenshot(path="verification_navbar.png", clip={"x": 0, "y": 0, "width": 1280, "height": 200})
            print("Screenshot taken")

        except Exception as e:
            print(f"Error: {e}")
            try:
                page.screenshot(path="verification_error.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == "__main__":
    run()
