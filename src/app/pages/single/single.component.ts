import { Component, OnInit } from '@angular/core';
import { InfobasicoService } from '../../services/infobasico.service';
import { SingleService } from '../../services/single.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private singleService:SingleService) { }

  ngOnInit() {
   
  }

}
