const {test, expect}=  require("@playwright/test")


test("Laucnh browser, capture URl and title" , async({page})=>{

    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
     
    //capture URl and title
     const url=await page.url()
     console.log("Aplication url:" +url)

     const title=await page. title()
     console.log("Application title:"+title)
    })