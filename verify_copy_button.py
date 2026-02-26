from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Scroll to footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Wait for footer
    page.wait_for_selector("footer")

    # Find the CopyButton in the footer. It has aria-label="Copy support email".
    copy_button = page.locator('button[aria-label="Copy support email"]')
    copy_button.click()

    # Wait for "Copied" text to appear
    # The text is "Copied" and class includes "text-green-400"
    copied_text = page.locator('text=Copied')

    # Take screenshot of the button area
    # We can screenshot the button's parent container
    button_container = copy_button.locator('..')
    button_container.screenshot(path="verification_copy_button.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
