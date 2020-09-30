import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  activar:boolean = false;
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
