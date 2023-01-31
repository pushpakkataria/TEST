import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators ,} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive';
  loginform=new FormGroup({
    username:new FormControl('pushpak katariya',[Validators.required]),
    password:new FormControl('15148')
  })

  onsubmit(){
    console.warn(this.loginform.value)
  }
  get username(){
    return this.loginform.get('username')
  }
}
