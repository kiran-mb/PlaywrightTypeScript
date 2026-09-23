const {test, expected} = require("@playwright/test")

test("First PLaywright Test", function display(){
    console.log("It is a First Playwright Test uisng Named Function!!!")
})

test("Second PLaywright Test", function(){
    console.log("It is a First Playwright Test uisng Ananymous Function!!!")
})
 
test("Third PLaywright Test", ()=>{
    console.log("It is a First Playwright Test uisng Arrow Function!!!")
})