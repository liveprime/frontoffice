import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import map from "rxjs";


/**
 * Generated class for the TestFirebasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-test-firebase',
  templateUrl: 'test-firebase.html',
})
export class TestFirebasePage {

  testForm: any;
  testDataBinding: boolean = false;
  testData:any;
  testDataReading: boolean = false;
  testDataReadDb:any;
  testDataWriteDb:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder, private firebaseProvider:FirebaseProvider)
  {
    this.testForm = formBuilder.group({
     id: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
     contenu: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])]
    });

    this.testDataWriteDb = {};
  }

  getData(){
    this.testData = {}
    this.testData['id'] = this.testForm.controls['id'].value;
    this.testData['contenu'] = this.testForm.controls['contenu'].value;
    this.testDataBinding= true;
  }

  getRefDb(){
  }

  getLineDb(){
  }

  read(testData){
    this.firebaseProvider.readTestData(this.testData).then((response)=> {
      console.log(response.node_);
      this.testDataReadDb = response.node_;
      this.testDataReading= true;
    });;

    // this.save(testData);
    // this.getLineDb();
  }

  save(testData){
    this.firebaseProvider.writeTestData(this.testData)
    // this.save(testData);
    // this.getLineDb();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestFirebasePage');
  }

}
