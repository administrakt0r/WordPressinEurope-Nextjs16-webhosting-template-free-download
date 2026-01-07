from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the homepage
        try:
            page.goto("http://localhost:3000", timeout=30000)
            print("Navigated to homepage")

            # Wait for content to load
            page.wait_for_load_state("networkidle")

            # Scroll to FAQ section where the "Start Learning" button is
            faq_section = page.locator("#faq")
            faq_section.scroll_into_view_if_needed()
            print("Scrolled to FAQ section")

            # Locate the "Start Learning" button and verify href
            start_learning_btn = page.get_by_role("link", name="Start Learning")
            href = start_learning_btn.get_attribute("href")
            print(f"Start Learning href: {href}")

            if href == "https://wp.wpineu.com/learning-portal":
                print("✅ Start Learning href is correct")
            else:
                print(f"❌ Start Learning href is incorrect: {href}")

            # Focus the button to verify focus styles
            start_learning_btn.focus()
            page.screenshot(path="verification/faq_focus.png")
            print("Took screenshot of FAQ button focus")

            # Scroll to Pricing section
            pricing_section = page.locator("#pricing")
            pricing_section.scroll_into_view_if_needed()
            print("Scrolled to Pricing section")

            # Locate "Get Started Free Now" button
            get_started_btn = page.get_by_role("link", name="Get Started Free Now")
            get_started_btn.focus()
            page.screenshot(path="verification/pricing_focus.png")
            print("Took screenshot of Pricing button focus")

            # Verify Hero buttons
            page.evaluate("window.scrollTo(0, 0)")
            hero_btn = page.get_by_role("link", name="Get Started Now")
            hero_btn.focus()
            page.screenshot(path="verification/hero_focus.png")
            print("Took screenshot of Hero button focus")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
