const Employee = require ("../lib/employee");

test("can instantiate Employee instance", () => {
    const e = new Employee();
    except(typeof(e)).toBe("object");
});

test("Can set name ")