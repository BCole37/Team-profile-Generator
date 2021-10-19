// Intern object JEST tests
const Intern = require("../lib/Intern");

describe("Intern Class which is a subclass of Employee", () => {
     
     it("should create a new Intern object", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.name).toBe("Bob");
          expect(int.id).toBe("5");
          expect(int.email).toBe("test@email.com");
          expect(int.school).toBe("UW");
     });

     it("should get the employee Name", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.getName()).toBe("Bob");
     });

     it("should get the employee ID", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.getID()).toBe("5");
     });

     it("should get the employee email", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.getEmail()).toBe("test@email.com");
     });

     it("should get the employee school", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.getSchool()).toBe("UW");
     });

     it("should get the employee role", () => {
          const int = new Intern("Bob", "5", "test@email.com", "UW");
          expect(int.getRole()).toBe("Intern");
     });
   
});