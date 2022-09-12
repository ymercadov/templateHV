import { Component } from '@angular/core';
import { InfobasicoService } from './services/infobasico.service';
import { InforedsocialService } from './services/inforedsocial.service';
import { SingleService } from './services/single.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateHV';

  constructor(public inforedsocialService:InforedsocialService,
              public infobasicoService: InfobasicoService,
              public singleService: SingleService ){}
}
