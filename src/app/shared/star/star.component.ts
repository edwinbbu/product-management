import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  
  @Input() rating:number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = (this.rating*75)/5;
    console.log("width",this.starWidth);
  }

  onClick(): void {
    console.log('clicked');
    this.notify.emit("Clicked!")
  }
}
