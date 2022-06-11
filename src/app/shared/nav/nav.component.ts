import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  mostrarAside = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMostrarAside(){
    this.mostrarAside = !this.mostrarAside; 
  }

}
