import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap'

import { NotificationService } from '../notification.service';



@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({opacity: 0, bottom: 0})),
      state('visible', style({opacity: 1, bottom: '30px'})),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

message: string;

snackVisible: string = 'hidden';


  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.do
    (msg => {
      this.message = msg;
      this.snackVisible = 'visible';
    }).switchMap(msg => Observable.timer(2000)).subscribe(msg => this.snackVisible = 'hidden');
  }

}
