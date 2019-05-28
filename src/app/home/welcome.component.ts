import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jedi-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  titleWelcome: string = 'Welcome Star Wars List';

  constructor() { }

  ngOnInit() {
  }

}
