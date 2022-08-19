const Employee = require ("../lib/employee");

test("can instantiate Employee instance", () => {
    const e = new Employee();
    except(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Robert";
    const e = new Employee(name);
    except(e.name).toBe(name);
    });