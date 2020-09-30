import { Component, OnInit, HostListener, Inject} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  posicion:boolean=true;
  activar:boolean = false;
  claseLinks:string;
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  
  onScroll(){
    this.posicion = false
    console.log(this.posicion);
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
