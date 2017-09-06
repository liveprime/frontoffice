import { Injectable } from '@angular/core';
import firebase from 'firebase'; // local installation approach
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseProvider {

    public db: any;
    private testData;
    constructor() {
      var config = {
        apiKey: "AIzaSyCnLOe7b0dekznQE1LyOliGgP76w3jeQOM",
        authDomain: "liveprime-db.firebaseapp.com",
        databaseURL: "https://liveprime-db.firebaseio.com",
        projectId: "liveprime-db",
        storageBucket: "liveprime-db.appspot.com",
        messagingSenderId: "836277021576"
      };

      if (!firebase.apps.length) {
        this.db = firebase.initializeApp(config);
        this.setTestDataRef();
      }
    }

    init() {

    }

    setTestDataRef(){
      this.testData = this.db = firebase.database().ref('/messages');
    }

    getTestDataRef(){
      return this.testData;
    }

    writeTestData(testData) {
      return firebase.database().ref('testData/' + testData.id).set({
        contenu: testData.contenu
      });
    }

    readTestData(testData){
      return firebase.database().ref('testData/' + testData.id).once('value')
    }
}
