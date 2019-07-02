import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  logueado:boolean;
  muestraMail:string;
  

  constructor( public auth : AuthService,
           private router: Router,
           private route: ActivatedRoute,
           private afAuth : AngularFireAuth
           ) 
           {
            }
    verificarSesion()
    {
      const session = sessionStorage.getItem('user');

            if(session==null)
            {
            return false;
            }
            else{
              this.muestraMail = session;
            return true;  
            }
    }

    cerrarSesion(){
      
      this.auth.logout();
      sessionStorage.clear();
      this.logueado=false;
      this.router.navigate(['']);
      console.log("Se cierra sesion");
      this.muestraMail =null;
      sessionStorage.clear();
    }


  ngOnInit() {

  }
}
