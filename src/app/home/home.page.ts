import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {HttpClient } from '@angular/common/http';
import {NavController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date : any
  enrol_num:any;

  constructor(public alertController: AlertController , private http : HttpClient,public nav : NavController) {}
  
    
  async mark() {
    
    this.date =new Date();
    // console.log(this.date.toLocaleTimeString());
    // console.log(this.enrol_num);

     await this.http.patch('https://sankalp-attendance-app.herokuapp.com/user/login',{enrollement_number: this.enrol_num, entry_time:this.date.toLocaleTimeString()}).subscribe(res=>{
        this.load(res)
     })
    
  }

  async load(data){
    if(data.success){
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attendance Marked Present ',
      subHeader: '',
      message: 'Confirmation Email Has Been Sent To Faculty.',
      buttons: ['OK']
    });

    await alert.present();
  }
  else{
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Wrong Enrolment Number ',
      subHeader: '',
      message: 'Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
  }
  
  gotToFaculty(){
    this.nav.navigateForward('faculty')
  }
}
