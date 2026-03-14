from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Test 404 page title
        print("Testing 404 page title...")
        page.goto("http://localhost:3000/does-not-exist")

        # Check title
        title = page.title()
        assert title == "Page Not Found | WPinEU", f"Expected title 'Page Not Found | WPinEU', got '{title}'"
        print("✓ Title is correct")

        page.screenshot(path="verification_not_found.png")

        # Test HeroAnimator rendering
        print("Testing HeroAnimator rendering...")
        page.goto("http://localhost:3000")
        page.wait_for_selector("text=Get Started Now")
        print("✓ Hero rendered successfully")

        page.screenshot(path="verification_hero.png", full_page=False)

        browser.close()

if __name__ == "__main__":
    verify()
