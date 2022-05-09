// using Intern constructor 
const Intern = require('../Lib/intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Jess', 33, 'jess@adflexmarketing.com.au', 'Penfolds');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Jess', 33, 'jess@adflexmarketing.com.au', 'Penfolds');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Jess', 33, 'jess@adflexmarketing.com.au', 'Penfolds');

    expect(intern.getRole()).toEqual("Intern");
}); 