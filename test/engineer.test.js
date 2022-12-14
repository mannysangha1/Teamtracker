const Engineer = require("../lib/engineer");

test("Can set GitHub account via constructor", () =>{
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getGitHub()).toBe(testValue);
});