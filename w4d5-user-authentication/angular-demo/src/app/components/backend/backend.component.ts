import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

const listAnimation = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    // query(':leave', [
    //   stagger(100, [
    //     animate('0.5s', style({ opacity: 0 }))
    //   ])
    // ]),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(1500, [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss'],
  animations: [
    listAnimation,
  ],
})
export class BackendComponent implements OnInit {
  @Input() processes: any[];

  constructor() { }

  ngOnInit() {
  }

}
