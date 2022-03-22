import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Chart } from 'chart.js';

@Component({ //need to actually display the users
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public users : any = []; //had to add any type

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void { //remove void
    this._profileService.getUsers() //returns an observable 
        .subscribe(data => this.users = data); //assign the data that arrives to users array
  }

}
