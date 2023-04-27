import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        style({
          opacity: 0
        }),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class ReportsComponent {
  images = ['report_1.png', 'report_2.png', 'report_3.png', 'report_4.png'];
}
