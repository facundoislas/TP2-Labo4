import { Component, OnInit } from '@angular/core';
import {Turnos} from './../../clases/turnos';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alta-turno-recepcion',
  templateUrl: './alta-turno-recepcion.component.html',
  styleUrls: ['./alta-turno-recepcion.component.css']
})
export class AltaTurnoRecepcionComponent implements OnInit {
  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  unTurno: Turnos;
  constructor(private db: AngularFirestore) { 
    this.unTurno = new Turnos();

    
    
  }
  sala()
  {
    switch(this.unTurno.especialidad)
    {
      case "clinico": 
        this.unTurno.sala = "CONS0" + (Math.floor(Math.random()*(7-1) + 1).toString());
        break;
        case "imagenes":
          this.unTurno.sala = "IMAG08";
          break;
        case "mecanica":
          this.unTurno.sala = "MECA09";
        break;

    }
  }

  enviar()
  {
    console.log(this.unTurno.email);
    this.sala();
    this.unTurno.especialista = (<HTMLInputElement>document.getElementById("nombre")).value
    console.log(this.unTurno);

    
    this.db.collection("turnos").add({

      email: this.unTurno.email,
      especialidad: this.unTurno.especialidad,
      especialista: this.unTurno.especialista,
      estado:"pendiente",
      fechaInicio: this.unTurno.fechaInicio,
      sala: this.unTurno.sala

    })
    .then(function(docRef) {
      console.log("Se guarda el turno en base ");
      
     
  })
  .catch(function(error) {
      alert("Error al registrar el turno, realizarlo nuevamente")
      
  });
    
  }

  aListar(e)
  {
    this.listar()
  }


  listar()
   {
    this.coleccionTipadaFirebase= this.db.collection<any>('empleados', ref => ref.where("especialidad", "==", this.unTurno.especialidad)); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
         
    });
  
  }
  ngOnInit() {
  }

}
