const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { default: test } = require("test");

test("Can set office number via constructor", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.Officernumber()).toBE(testValue); 
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBE(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficernumber()).toBE(testValue);
});