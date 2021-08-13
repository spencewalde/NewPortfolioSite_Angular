import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public slides = [
    { src: "https://images.unsplash.com/photo-1564419320415-7f119406236e?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8b3V0ZG9vcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { src: "https://images.unsplash.com/photo-1524704169048-4f9c6563b27f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" },
    { src: "https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" },
    { src: "https://images.unsplash.com/photo-1508867743401-21ad68d105b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
