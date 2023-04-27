import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dropzonearea',
  templateUrl: './dropzonearea.component.html',
  styleUrls: ['./dropzonearea.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class DropzoneareaComponent {
  title= 'Dropzone';

  files: File[] = [];

  response : any;
  constructor(private http: HttpClient) { }

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.files[0]);

    this.http.post<any>('http://localhost:5000/upload', formData).subscribe(
      (response) => {
        console.log(response);
        this.response = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
