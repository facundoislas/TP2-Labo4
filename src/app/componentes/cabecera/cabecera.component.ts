import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  logueado:boolean;

  

  constructor( public auth : AuthService,
           private router: Router,
           private route: ActivatedRoute
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
            return true;  
            }
    }

    cerrarSesion(){
      
      this.auth.logout();
      sessionStorage.clear();
      this.logueado=false;
      this.router.navigate(['']);
      console.log("Se cierra sesion");
    }

  ngOnInit() {
  }

}
