from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000/free-wordpress-hosting")

    # Wait for the rating element to be visible
    # The rating element has role="img" and aria-label="Rated 4.9 out of 5 stars"
    # Wait for the element with more flexible selector to debug
    # It is inside HostingHero component

    # Increase timeout to 15s to allow for animations
    try:
        # Debugging: check if we can find any text that should be in the hero
        page.wait_for_selector('text=Ultimate Free WordPress Hosting', timeout=15000)
        print("Found hero title.")

        # Try to find the star icon
        page.wait_for_selector('svg.lucide-star', timeout=5000)
        print("Found star icon.")

        page.wait_for_selector('div[role="img"][aria-label="Rated 4.9 out of 5 stars"]', timeout=5000)
    except Exception as e:
        print(f"Error: {e}")
        # print(page.content())

    rating_element = page.locator('div[role="img"][aria-label="Rated 4.9 out of 5 stars"]')

    if rating_element.count() > 0:
         # Take screenshot of the rating area
        rating_container = rating_element.locator('..')
        rating_container.screenshot(path="verification_hosting_hero_rating.png")
        print("Screenshot taken.")
    else:
        print("Element not found.")


    browser.close()

with sync_playwright() as playwright:
    run(playwright)
