const Employee = require('./employee');


class Manager extends Employee{
  constructor (name, title, salary, boss, employees) {
    super(name, title, salary, boss);
    this.employees = [];

  }

  addEmployees(...employee){
    this.employees.push(...employee);

  }
  bonus(multiplier){
    let totalSalary = this.salary;
    for (let i = 0; i < this.employees.length; i++){
      let employee = this.employees[i];
      totalSalary += employee.salary;
    }

    let bonus = (totalSalary * multiplier);
    return bonus;
  }
  
}

module.exports = Manager;
