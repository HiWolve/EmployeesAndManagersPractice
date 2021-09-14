const Employee = require('./employee');
const Manager = require('./manager');




const Hobbes = new Manager("Hobbes", "Founder", 1000000, null);
const Calvin = new Manager("Calvin", "Director", 130000, Hobbes);
const Susie = new Manager("Susie", "TA Manager", 100000, Calvin);
const Lily = new Employee("Lily", "TA", 90000, Susie);
const Clifford = new Employee("Clifford", "TA", 90000, Susie);




Hobbes.addEmployees(Calvin, Susie, Lily, Clifford);
Calvin.addEmployees(Susie, Lily, Clifford);
Susie.addEmployees(Lily, Clifford);


console.log(Hobbes.bonus(0.05));
console.log(Calvin.bonus(0.05));
console.log(Susie.bonus(0.05));
console.log(Lily.bonus(0.05));
console.log(Clifford.bonus(0.05));
