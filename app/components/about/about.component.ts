import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 2000, behavior:'smooth'});
  }

  onClick(){
    console.log("clicked");
  }

}
