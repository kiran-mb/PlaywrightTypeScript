const {test, expect} = require('@playwright/test')
 
test("It is a First Validation", ()=>{
    expect(45).toBe(45)
})
 
test("It is a Second Validation", ()=>{
    expect(75).toBeGreaterThan(50)
})
 
test("It is a Third Validation", ()=>{
    expect(45).toBeLessThanOrEqual(45)
})
 
test("It is a Fourth Validation", ()=>{
    expect(45).toBeGreaterThanOrEqual(20)
})
 
test("It is sixth Validation", ()=>{
    expect('JavaScript' === 'JavaScript').toBeTruthy()
})
 
test.skip("It is Seventh Validation", ()=>{
    expect("Playwright Automation".startsWith("Playwright")).toBeTruthy()
})
 
test.only("It is Eighth Validation", ()=>{
    expect("Welcome").toContain("Welcome")
})