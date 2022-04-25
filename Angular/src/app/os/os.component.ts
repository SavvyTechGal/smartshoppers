import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    console.log("this works");
  }
  secondEvent(){
    console.log("second works");
  }
}
