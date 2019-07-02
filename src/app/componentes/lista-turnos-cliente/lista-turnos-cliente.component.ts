import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-turnos-cliente',
  templateUrl: './lista-turnos-cliente.component.html',
  styleUrls: ['./lista-turnos-cliente.component.css']
})
export class ListaTurnosClienteComponent implements OnInit {


  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  ListadoDeMascotas:Observable<any[]>;
  lista: Array<any> = [];
  email: string;
  estado:string;

  constructor(private db: AngularFirestore) {
    this.email= sessionStorage.getItem("user");
    this.coleccionTipadaFirebase= this.db.collection<any>('turnos', ref => ref.where("email", "==", this.email)); 
    //para el filtrado mirar la documentación https://firebase.google.com/docs/firestore/query-data/queries?authuser=0
    this.ListadoDeMascotas=this.coleccionTipadaFirebase.valueChanges();
    this.ListadoDeMascotas.subscribe(x => {
        this.lista = x
        
    });
   }

  ngOnInit() {
  }

}
