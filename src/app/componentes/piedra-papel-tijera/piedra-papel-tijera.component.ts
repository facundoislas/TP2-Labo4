import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego : JuegoPiedraPapelTijera;
  ocultarVerificar : boolean;
  ocultarNuevo : boolean;
  Mensajes:string;
  arrayResultados : Array<any>;
  jugador = JSON.parse(localStorage.getItem("Id"));
  intentos: number;


  constructor() {

    this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,this.jugador,0,"0");
    this.ocultarVerificar = true;
    this.arrayResultados = JSON.parse(this.jugador);
    this.intentos = 0;
    this.nuevoJuego.resultado=null;
    console.info(this.arrayResultados);

   }

   public generar(eleccion:string)
   {
     this.ocultarVerificar = false;
     this.nuevoJuego.resultado= this.nuevoJuego.Jugar(eleccion);
     
    this.MostarMensaje(this.nuevoJuego.resultado, this.nuevoJuego.gana);
    console.log(this.nuevoJuego.gana);
    this.nuevoJuego.jugador=sessionStorage.getItem('user');
    this.nuevoJuego.intentos = this.intentos+1;
    this.intentos=0;
        
        
      
    this.nuevoJuego.intentos = this.intentos;
  
    console.log("maquina " + this.nuevoJuego.compu);
    console.log("usuario " + eleccion);
    console.log(this.nuevoJuego.resultado);
  this.nuevoJuego.guardarLocal();
  this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,this.jugador,0,"0");
  //Despues de verificar si gane o no, reinicio el juego!!
   }

   MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  

  ngOnInit() {
  }

}
