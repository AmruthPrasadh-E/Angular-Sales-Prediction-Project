import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-angform',
  templateUrl: './angform.component.html',
  styleUrls: ['./angform.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AngformComponent {

  formData = {
    store: '',
    item: '',
    year: '',
    month: '',
    day: '',
    weekday: ''
  };
  response: any;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<any[]>('http://localhost:5000/form', this.formData).subscribe(
      (response) => { this.response = response;},
      (error) => { console.log(error); }
    );
  }
}

