// Engineer object JEST tests
const Engineer = require("../lib/Engineer");

describe("Engineer Class which is a subclass of Employee", () => {
     
     it("should create a new Engineer object", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.name).toBe("Bob");
          expect(eng.id).toBe("5");
          expect(eng.email).toBe("test@email.com");
          expect(eng.github).toBe("gitHubTest");
     });

     it("should get the employee Name", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.getName()).toBe("Bob");
     });

     it("should get the employee ID", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.getID()).toBe("5");
     });

     it("should get the employee email", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.getEmail()).toBe("test@email.com");
     });

     it("should get the employee github ID", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.getGithub()).toBe("gitHubTest");
     });

     it("should get the employee role", () => {
          const eng = new Engineer("Bob", "5", "test@email.com", "gitHubTest");
          expect(eng.getRole()).toBe("Engineer");
     });
   
});