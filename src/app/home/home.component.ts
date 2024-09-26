import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  show: boolean = true;

  // decalre variable for 2 way data binding
  name = '';
  email = '';
  phone = '';
  address = '';

  // array for qualification. Needed because we need to render multipe fields for it.
  qualification = [{
    school: '',
    degree: '',
    year: ''
  }]

  //function to add qualification of user
  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' })
  }

  deleteQualification(indexNumber : number) {
    this.qualification.splice(indexNumber, 1)
  }

}
