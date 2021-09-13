import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  @Input()
  LoaderStatus : Boolean

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    // console.log(this.LoaderStatus);
  }

}
