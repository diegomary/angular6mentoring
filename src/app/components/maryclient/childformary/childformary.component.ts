import { Component, OnInit,Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childformary',
  templateUrl: './childformary.component.html',
  styleUrls: ['./childformary.component.css']
})
export class ChildformaryComponent implements OnInit, AfterViewInit {
  @Input() name: string;
  @Output() nameToPassToParent: EventEmitter<string> =   new EventEmitter();
  

  public nameModified:string; 
  constructor() {}


  public CheckChange(textChanging:string) {
    this.nameToPassToParent.emit(textChanging);
  }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
  
  }

}
