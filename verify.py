from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # Screenshot the hero section which contains ExternalLinks
            page.screenshot(path="verification_hero.png")
            print("Screenshot taken: verification_hero.png")

            # Check if links are present
            links = page.locator("a")
            count = links.count()
            print(f"Found {count} links")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
