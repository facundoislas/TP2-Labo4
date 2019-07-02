import { Component, OnInit } from '@angular/core';
import { AuthService} from './../../servicios/auth.service';
import { Usuario } from './../../clases/usuario';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent implements OnInit {

  unUsuario: Usuario;
  items: Observable<any[]>;
  coleccionTipadaFirebase:AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore, private auth : AuthService,  private router : Router) { 

    this.unUsuario = new Usuario();
    this.items = db.collection('usuarios').valueChanges();
  }

  ngOnInit() {
  }

  enviar()
  {
    console.log("usuario ", this.unUsuario);

    this.db.collection("usuarios").doc( this.unUsuario.tipo +" - " + this.unUsuario.email).set({

      email: this.unUsuario.email,
      clave: this.unUsuario.clave,
      tipo: "cliente",
      id:  this.unUsuario.tipo +" - " + this.unUsuario.email,
      foto:  "sin foto",
      nombre: this.unUsuario.nombre

    })
    .then(function(docRef) {
      console.log("Se guarda el usuario en base ");
      
     
  })
  .catch(function(error) {
      alert("Error al registrarse, realizarlo nuevamente")
      console.error("Error al escribir el usuario", error);
  });

  if( this.coleccionTipadaFirebase= this.db.collection<any>('usuarios', ref => ref.where("email", "==", this.unUsuario.email))){
    this.registrar();
  }
}
  
  registrar()
  {
    this.auth.registerUser(this.unUsuario.email,this.unUsuario.clave)
    .then((unUsuario) => {
      alert("Alta Exitosa")
      console.log("Alta exitosa");
      console.log(this.unUsuario);
      
    })
    .catch(err=>{
     console.log("No se ha podido registrar el usuario");
    })
    
  }

}
