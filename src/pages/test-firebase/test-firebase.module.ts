import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestFirebasePage } from './test-firebase';

@NgModule({
  declarations: [
    TestFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(TestFirebasePage),
  ],
})
export class TestFirebasePageModule {}
