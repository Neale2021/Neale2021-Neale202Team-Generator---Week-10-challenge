// using Employee constructor 
const Employee = require('../lib/employee');

// creates employee object 
describe("employee", () => {
    describe("Initialization", () => {
      it("creates an employee ", () => {
        const employee = new Employee('test', 36, 'test@adflexmarketing.com.au');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
      });

// gets name from getname() 
it('gets employee name', () => {
    const employee = new Employee('test', 36, 'test@adflexmarketing.com.au');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
it('gets employee ID', () => {
    const employee = new Employee('test', 36, 'test@adflexmarketing.com.au');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
it('gets employee email', () => {
    const employee = new Employee('test', 36, 'test@adflexmarketing.com.au');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('gets role of employee', () => {
    const employee = new Employee('test', 36, 'test@adflexmarketing.com.au');

    expect(employee.getRole()).toEqual("Employee");
});
});
});