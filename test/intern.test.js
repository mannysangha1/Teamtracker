const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
    const testValue = "UW";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
}); 

test("getRole() should return \"Internt\"", () => {
    
})