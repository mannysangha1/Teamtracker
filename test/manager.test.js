const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficernumber()).toBE(testValue) 
})