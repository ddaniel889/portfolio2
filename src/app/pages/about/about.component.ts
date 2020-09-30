import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  activar:boolean;
  claseLinks:string;

  constructor() { }

  ngOnInit(): void {
  }
  abrir(){
    this.activar = true;
    this.claseLinks = "animate__fadeInDown";
  }
  cerrar(){
    setTimeout(() => {
      this.activar = false;
    }, 1800);
    this.claseLinks = "animate__fadeOutUp";
  }

}
