import { test, expect } from '@playwright/test';

test('create user and login', async ({page}) => {
    // reach homepage
    await page.goto('https://www.automationexercise.com/')
    await expect(page).toHaveTitle("Automation Exercise")
    //opening login/signup page then fill initial registration value
    await page.locator('xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click()
    await expect(page.getByText("Login to your account")).toBeVisible()
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[2]').fill("Testisxx1")
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill("testisxx0x2@gmail.com")
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/button').click()
    await expect(page.getByText("Enter Account Information")).toBeVisible()

    //fill registration form
    await page.locator('xpath=//*[@id="form"]/div/div/div/div[1]/form/div[1]/div[1]/label').click()
    await page.locator('xpath=//*[@id="password"]').fill("password1")
    await page.selectOption('xpath=//*[@id="days"]', {label : '1'})
    await page.selectOption('xpath=//*[@id="months"]', {label : 'April'})
    await page.selectOption('xpath=//*[@id="years"]', {label : '1993'})
    await page.locator('xpath=//*[@id="first_name"]').fill("Testis")
    await page.locator('xpath=//*[@id="last_name"]').fill("Teron")
    await page.locator('xpath=//*[@id="company"]').fill("Kampeni")
    await page.locator('xpath=//*[@id="address1"]').fill("address line 1")
    await page.selectOption('xpath=//*[@id="country"]', {label : 'Canada'})
    await page.locator('xpath=//*[@id="state"]').fill("State")
    await page.locator('xpath=//*[@id="city"]').fill("City")
    await page.locator('xpath=//*[@id="zipcode"]').fill("555644")
    await page.locator('xpath=//*[@id="mobile_number"]').fill("09023727")
    await page.locator('xpath=//*[@id="form"]/div/div/div/div[1]/form/button').click()

    //wait and validate for account created text
    await page.waitForTimeout(5000)
    await expect(page.getByText("Account Created!")).toBeVisible()
    await page.locator('xpath=//*[@id="form"]/div/div/div/div/a').click()

    //delete account
    await page.locator('xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a').click()
    await page.pause()
}
)