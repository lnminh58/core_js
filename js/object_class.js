// class Employee{
//     constructor( name , age){
//         this.name=name;
//         this.age=age;
//     }
//     setName(name){
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
//     setAge(age){
//         this.age=age;
//     }
//     getAge(){
//         return this.age;
//     }
// }
// var employee=new Employee("thiem",25);
// console.log(employee);

//Base class access

// class MaleEmployee extends Employee{
//     constructor( name, age, wifeName){
//         super(name,age);
//         this.wifeName=wifeName;
//     }
//     setWifeName(wifeName){
//         this.wifeName=wifeName;
//     }
//     getWifeName(){
//         return this.getWifeName;
//     }

// }
// var maleEmployee= new MaleEmployee("Anh",25,"Linh");
// console.log(maleEmployee);

// Super - Base class access

// class Employee {
//     getClassName() {
//         return "class Employee";
//     }
// }
// class MaleEmployee extends Employee {
//     getClassName() {
//         return "Class Male Employee - " + super.getClassName();
//     }
//     // ge
// }
// var maleEmployee = new MaleEmployee();
// console.log(maleEmployee.getClassName());

// //static member

// class Company{
//     static produce(){
//         return "Company's product is BCS"
//     }
// }
// console.log(Company.produce());


// Getter & Setter

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set employeeName(name) {
        this.name = name;
    }
    get employeeName() {
        return this.name;
    }
    set employeeAge(age) {
        this.age = age;
    }
    get employeeAge() {
        return this.age;
    }

};
var employee = new Employee();
employee.employeeName = "Thiem";
console.log('name: ', employee.employeeName); // employee.name

//acess via class

Employee.employeeName = "Thiem";
console.log('name: ', Employee.employeeName);