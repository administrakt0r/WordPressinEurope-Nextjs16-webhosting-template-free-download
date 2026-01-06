from playwright.sync_api import sync_playwright

def verify_faq(page):
    page.goto("http://localhost:3000")

    # Wait for the FAQ section to be visible
    page.wait_for_selector("#faq")

    # Scroll to the FAQ section
    faq_section = page.locator("#faq")
    faq_section.scroll_into_view_if_needed()

    # Take a screenshot of the initial state
    page.screenshot(path="verification/faq_initial.png")

    # Click on the first FAQ item
    first_faq = page.locator("button[id*='header-0']")
    first_faq.click()

    # Wait for the panel to expand
    page.wait_for_selector("div[id*='panel-0']", state="visible")

    # Take a screenshot of the expanded state
    page.screenshot(path="verification/faq_expanded.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_faq(page)
        finally:
            browser.close()
