import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.page.html',
  styleUrls: ['./faculty.page.scss'],
})
export class FacultyPage implements OnInit {

  students:any;
  constructor(private http : HttpClient) {
   }

  ngOnInit() {


  }

 async ionViewWillEnter(){

    this.students = await this.http.get('https://sankalp-attendance-app.herokuapp.com/user/all').toPromise();

    console.log(this.students);
    
  }

}
