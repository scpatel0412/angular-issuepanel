export class Signup {
    constructor(email="",pass="",isAdmin=""){
        this.email = email;
        this.pass = pass;
        this.isAdmin = isAdmin;
    }
    email:string;
    pass:string;
    isAdmin:string;
}
