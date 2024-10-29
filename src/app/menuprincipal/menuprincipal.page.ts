import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})
export class MenuprincipalPage implements OnInit {
user:{
  id: number
  nombre: string
  username: string
  password: string
  tienda: string
  urlTienda: string
} = {
  id: 0,
  nombre: "",
  username: "",
  password: "",
  tienda: "",
  urlTienda: ""
}
  constructor() { 
    
  }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser){
      this.user = JSON.parse(currentUser)
    }
  }
}
