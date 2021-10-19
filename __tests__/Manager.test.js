// Manager object JEST tests
const Manager = require("../lib/Manager");

describe("Manager Class which is a subclass of Employee", () => {
     
     it("should create a new Manager object", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.name).toBe("Bob");
          expect(mgr.id).toBe("5");
          expect(mgr.email).toBe("test@email.com");
          expect(mgr.officeNumber).toBe("5-001");
     });

     it("should get the employee Name", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.getName()).toBe("Bob");
     });

     it("should get the employee ID", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.getID()).toBe("5");
     });

     it("should get the employee email", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.getEmail()).toBe("test@email.com");
     });

     it("should get the employee office number", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.getOfficeNumber()).toBe("5-001");
     });

     it("should get the employee role", () => {
          const mgr = new Manager("Bob", "5", "test@email.com", "5-001");
          expect(mgr.getRole()).toBe("Manager");
     });
   
});