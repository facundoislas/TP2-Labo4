import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth :  AngularFireAuth) { 
    console.log('Hello AuthProvider Provider');
  }


   // Login de usuario
 public loginUser(email:string, password:string){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
}

// Devuelve la session
public get Session(){
 return this.afAuth.authState;
}

 // Logout de usuario
public logout(){
  this.afAuth.auth.signOut().then(()=>{
    // hemos salido
  })
}
}
