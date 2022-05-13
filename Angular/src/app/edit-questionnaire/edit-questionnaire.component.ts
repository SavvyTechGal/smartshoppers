import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-edit-questionnaire',
  templateUrl: './edit-questionnaire.component.html',
  styleUrls: ['./edit-questionnaire.component.css']
})
export class EditQuestionnaireComponent implements OnInit {
  public userEmail:string = '';  //used to get previous responses of user
  public resubmitted: boolean = false;

  //keys used for accessing form values
  public OSKeys:any[] = ['Windows', 'Mac', 'Chrome'];  
  public brandKeys:any[] = ['Acer','Apple','ASUS', 'Dell','HP','Lenovo','Microsoft'];

  public TestanswersObject: any = {  //will hold edited responses onSubmit
    role:'',
    budget: '',
    os:[],
    brands:[],
    coder:false,
    gamer:false,
    design:false,
    stream:false,
    severalApps:false,
    ports:false,
    travel:false,
    work:false
  }

  public dummyUserData:any = {   // will hold user's previous response data
    role:'Software Developer',
    budget:'100-300',
    os:['Windows', 'Mac', 'Chrome'],
    brands:['Acer','Apple', 'Dell','HP','Microsoft'],
    coder:true,
    gamer:false,
    design:true,
    stream:false,
    severalApps:true,
    ports: true,
    travel:true,
    work:true
  }

  constructor(public auth: AuthService) { }

  onSubmit(editQuestionForm: { value: any; }) {  
    //console.log(editQuestionForm.value);
    this.TestanswersObject.role = editQuestionForm.value.role;
    this.TestanswersObject.budget = editQuestionForm.value.budget;
    for(const brand in this.brandKeys) {
      let key = this.brandKeys[brand];
      if((editQuestionForm.value)[key]) {
        this.TestanswersObject.brands.push(key);
      }
    }
    for(const OS in this.OSKeys) {
      let key = this.OSKeys[OS];
      if((editQuestionForm.value)[key]) {
        this.TestanswersObject.os.push(key);
      }
    }
    if(editQuestionForm.value.coder) {
      this.TestanswersObject.coder = true;
    }
    if(editQuestionForm.value.gamer) {
      this.TestanswersObject.gamer = true;
    }
    if(editQuestionForm.value.design) {
      this.TestanswersObject.design = true;
    }
    if(editQuestionForm.value.stream) {
      this.TestanswersObject.stream = true;
    }
    if(editQuestionForm.value.severalApps) {
      this.TestanswersObject.severalApps = true;
    }
    if(editQuestionForm.value.ports) {
      this.TestanswersObject.ports = true;
    }
    if(editQuestionForm.value.travel) {
      this.TestanswersObject.travel = true;
    }
    if(editQuestionForm.value.work) {
      this.TestanswersObject.work = true;
    }
    console.log('testing');
    console.log(this.TestanswersObject);

    //PUT request to backend + redirect to product display page
    //this.updateUserResponses(email,answers)
    this.resubmitted = true;
  }

  //GET previous responses
  getUserResponses() {
    //.....
  }

  //PUT updated responses
  updateUserResponses() {
    //.....
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //saving email to variable
        console.log(this.userEmail);
        
       }
   )
   //this.getUserResponses(this.userEmail)
   

  
   

  }

}
