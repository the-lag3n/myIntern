const puppeteer = require('puppeteer')

async function scrape(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="EmpStats"]/div[2]/div[1]/div/div')
    const rating = await el.getProperty('innerText')
    const ratingTxt = await rating.jsonValue();

    browser.close();

    return ratingTxt;
}
 
export {scrape}