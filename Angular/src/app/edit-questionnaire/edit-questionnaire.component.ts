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
    coder:'no',
    codeRank:'',
    gamer:'no',
    gamerRank:'',
    design:'no',
    designRank:'',
    stream:'no',
    streamRank:'',
    severalApps:'no',
    severalAppsRank:'',
    ports:'no',
    portsRank:'',
    travel:'no',
    travelRank:'',
    work:'no',
    workRank:''
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
      this.TestanswersObject.coder = 'yes';
    }

    this.TestanswersObject.codeRank = (editQuestionForm.value.codeRank).toString();
    

    if(editQuestionForm.value.gamer) {
      this.TestanswersObject.gamer = 'yes';
    }

    this.TestanswersObject.gamerRank = (editQuestionForm.value.gamerRank).toString();

    if(editQuestionForm.value.design) {
      this.TestanswersObject.design = 'yes';
    }

    this.TestanswersObject.designRank = (editQuestionForm.value.designRank).toString();

    if(editQuestionForm.value.stream) {
      this.TestanswersObject.stream = 'yes';
    }

    this.TestanswersObject.streamRank = (editQuestionForm.value.streamRank).toString();

    if(editQuestionForm.value.severalApps) {
      this.TestanswersObject.severalApps = 'yes';
    }

    this.TestanswersObject.severalAppsRank = (editQuestionForm.value.severalAppsRank).toString();

    if(editQuestionForm.value.ports) {
      this.TestanswersObject.ports = 'yes';
    }

    this.TestanswersObject.portsRank = (editQuestionForm.value.portsRank).toString();

    if(editQuestionForm.value.travel) {
      this.TestanswersObject.travel = 'yes';
    }

    this.TestanswersObject.travelRank = (editQuestionForm.value.travelRank).toString();

    if(editQuestionForm.value.work) {
      this.TestanswersObject.work = 'yes';
    }

    this.TestanswersObject.workRank = (editQuestionForm.value.workRank).toString();

    //console.log('printing answers -----');
    //console.log(this.TestanswersObject);

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
        //console.log(this.userEmail);
        
       }
   )
   //this.getUserResponses(this.userEmail)
   

  
   

  }

}
