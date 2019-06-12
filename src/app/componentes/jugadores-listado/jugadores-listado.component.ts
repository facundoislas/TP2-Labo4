import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { stringify } from 'querystring';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: Array<string> = [];
  objeto: Object;
  
    constructor() {
      
      
    }
    
    

  ngOnInit() {
    this.obtenerDatos();
  }
   

    

    obtenerDatos()
    {
      let i:Number;
      
      for(let i = 1; i< localStorage.length; i++)
      {
        let aux = i.toString();
        this.objeto = JSON.parse(localStorage.getItem("partida " + aux));
        this.listado.push(this.objeto['jugador']);
         
      }
      this.listado = this.listado.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    }

    
    



  

}
