from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000", timeout=60000)

            # Scroll to footer
            footer = page.locator("footer")
            footer.scroll_into_view_if_needed()

            # Find a link in the footer and focus it
            # Try "cPanel Hosting"
            link = page.get_by_role("link", name="cPanel Hosting")
            link.focus()

            # Take screenshot of the footer
            footer.screenshot(path="footer_focused.png")
            print("Screenshot saved to footer_focused.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
