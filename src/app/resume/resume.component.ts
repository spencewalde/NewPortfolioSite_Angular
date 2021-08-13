import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  activePage: string = 'landing'

  

  constructor() { 
    this.activePage = 'landing';
  }

  ngOnInit(): void {

  }

}
