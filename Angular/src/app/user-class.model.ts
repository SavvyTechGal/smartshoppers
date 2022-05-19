export class UserClass {
    public firstName: string;
    public lastName: string;
    public email: string;
    public role: string;

    constructor(firstName: string, lastName: string, role: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
    }
}
