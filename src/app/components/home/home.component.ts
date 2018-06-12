import { Component, OnInit } from '@angular/core';
import {  CrudUserService } from '../../crud-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //id:number;
  name:string;
  username:string;
  users: Array<any>;
  rdonly: boolean;
  showEdits: boolean;

  constructor(private CrudUserService : CrudUserService) { }

  ngOnInit() {
    
    this.name = "Leanne Graham";
    this.username="Bret";
  
    this.rdonly = true;
    this.showEdits = false;

  }

  submitForm(userForm){
    this.rdonly = true;
    this.showEdits = false;
    console.log("Form Updated.",userForm);
    this.CrudUserService.createUser(userForm.value.name,userForm.value.username).subscribe(
      userForm => alert('A new user Created')
    );
  }

  editForm(userForm){
    // console.log("Form Edit.",userForm);
    this.rdonly = false;
    this.showEdits = true; 
  }

  cancelForm(){
    this.rdonly = true;
    this.showEdits = false;
    // console.log("Form Cancelled.",this);
    this.ngOnInit();
  }

showUsers() {
  this.CrudUserService.getUsers()
    // clone the data object, using its known Config shape
    .subscribe(users => {
      this.users = users;
      console.log("so",this.users)}
    );
}

}
