// Employee object JEST tests
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
     
     it("should create a new employee object", () => {
          const emp = new Employee("Bob", "5", "test@email.com");
          expect(emp.name).toBe("Bob");
          expect(emp.id).toBe("5");
          expect(emp.email).toBe("test@email.com");
     });

     it("should get the employee Name", () => {
          const emp = new Employee("Bob", "5", "test@email.com");
          expect(emp.getName()).toBe("Bob");
     });

     it("should get the employee ID", () => {
          const emp = new Employee("Bob", "5", "test@email.com");
          expect(emp.getID()).toBe("5");
     });

     it("should get the employee email", () => {
          const emp = new Employee("Bob", "5", "test@email.com");
          expect(emp.getEmail()).toBe("test@email.com");
     });

     it("should get the employee role", () => {
          const emp = new Employee("Bob", "5", "test@email.com");
          expect(emp.getRole()).toBe("Employee");
     });
   
});