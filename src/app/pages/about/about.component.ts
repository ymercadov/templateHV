import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  normalPB: boolean;    
  stripedPB: boolean;    
  animatedPB: boolean;    

  constructor() { }

  ngOnInit() {
  }

  showProgressBar(value){    
    // Value =1 Normal Progress bar    
    // Value =2 Striped Progress bar    
    // Value =3 Animated Progress bar    
    this.normalPB=false;    
    this.stripedPB=false;    
    this.animatedPB=false;    
    
    value ==1 ? this.normalPB=true : value ==2 ?  this.stripedPB=true : this.animatedPB=true;    
      
  }    

}
