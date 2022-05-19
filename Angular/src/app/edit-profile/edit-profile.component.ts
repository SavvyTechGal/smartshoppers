import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public userEmail:string = '';
  public fname:any;
  public lname:any;
  public role:any;

  public saved: boolean = false;

  //takes form values + sends to backend to add user
  onSubmit(editForm: { value: any; }) {  
    let fname = editForm.value.firstname;
    let lname = editForm.value.lastname;
    let role = editForm.value.roleSel;
    //console.log(`email in signup: ${this.userEmail}`);
    this.userService.editUser(fname,lname,role,this.userEmail);  //PUT to user db
    //.subscribe((data) => {
    // console.log(data);
    //  this.saved = true;
    //});
    this.saved = true;
    
  }

  getUser(email: string): void {

    //console.log(email);
    this.userService.getUser(this.userEmail)
    .subscribe((data) => {
      if(data == null) {
        console.log("data is null");  //if user not found in db -> not registered yet -> direct to signupform
      
      }
      else {    //if user returned --> load profile + saved
      this.fname = Object.values(data)[1];
      this.lname = Object.values(data)[2];
      this.role = Object.values(data)[3];
      
      }
      
    });
    
  }

  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //saving email to variable
        //console.log(this.userEmail);
        this.getUser(this.userEmail); 
       }
   )
  }

}
