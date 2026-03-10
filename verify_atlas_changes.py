from playwright.sync_api import sync_playwright
def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/")
        page.wait_for_timeout(2000)
        page.screenshot(path="verification_hero_link.png", full_page=False)
        browser.close()
if __name__ == "__main__":
    verify_changes()
