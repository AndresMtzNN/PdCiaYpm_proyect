import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { firebaseConfig } from 'src/environments/firebaseConfig';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}

  initializeApp(){
    firebase.initializeApp(firebaseConfig);
  }
}
