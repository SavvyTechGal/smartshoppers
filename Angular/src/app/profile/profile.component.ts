import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Chart } from 'chart.js';
import { AuthService } from '@auth0/auth0-angular';

@Component({ //need to actually display the users
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileJson: string = '';

  public users : any = []; //had to add any type

  constructor(
    private _profileService: ProfileService, 
    public auth: AuthService) { }

  ngOnInit(): void { //remove void
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile))
    )

    this._profileService.getUsers() //returns an observable 
        .subscribe(data => this.users = data); //assign the data that arrives to users array
  }

}
