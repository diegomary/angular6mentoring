import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges,ElementRef } from '@angular/core';
import { GenericSvcService } from '../../services/generic-svc.service';
import {Flower} from '../../interfaces/flower';

@Component({
  selector: 'app-maryclient',
  templateUrl: './maryclient.component.html',
  styleUrls: ['./maryclient.component.css']
})
export class MaryclientComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
 public title:string;
 public changedClass:boolean; 
 public modelInput:string;
 public choices:any[];
 public nameForChild:string;
 public flowers:Flower[];
 public isActive:boolean;

  constructor(private productService: GenericSvcService,private el: ElementRef) {
    this.isActive = true; // the ngIf shows accordingly
    this.choices= [{desc:"AA", value:"ChoiceAA"},{desc:"BB", value:"ChoiceBB"},{desc:"CC", value:"ChoiceCC"},{desc:"DD", value:"ChoiceDD"}];
    this.changedClass = true;
    this.title='maryttsclient';
    this.modelInput = "Initial input";
    this.nameForChild ="Diego & Mary";
    this.flowers = [];
   }

  ngAfterViewInit() {
    let elements = document.getElementsByClassName('par-before');
    Array.from(elements).forEach((element:any) => {
      element.className= "par-after"; 
   });

   this.el.nativeElement.querySelector('h1:nth-of-type(2)').textContent="Modify Direct access to the dom";


  }
  ngOnInit() {

    console.log(this.productService.getListOfNames());
    this.productService.getBachFlowers().subscribe((data: Flower[]) => { this.flowers = data.map(flower => {
      return {
        Id:flower.Id,
        Name:flower.Name,
        Description:flower.Description,
        ImagePath:flower.ImagePath,
        FlowerColor:flower.FlowerColor,
        Notes:flower.Notes
      }
    });
    console.log(this.flowers);

  },
   err => {console.log(err);});
  }
  ngOnDestroy() {}
  ngOnChanges() {}


  public CheckChange(textChanging:any) {
    console.log(textChanging);
  }

  public ChangeClass():void { 
    console.log(this.changedClass); 
    
     this.changedClass = this.changedClass === true ? false:true;

     console.log(this.changedClass);
  }

  public getChoice(choice:any) {
      console.log(choice.target.value);
  }

  public nameFromChildHandler($event:string) {
    console.log($event);
  }


}
