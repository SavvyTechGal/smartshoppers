export class UserClass {
    private firstName: string;
    private lastName: string;
    private email: string;
    private role: string;

    constructor(firstName: string, lastName: string, role: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
    }

    displayUser() {   //for testing
        console.log("displayUser---");
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.role);
        console.log(this.email);
    }

    

}
