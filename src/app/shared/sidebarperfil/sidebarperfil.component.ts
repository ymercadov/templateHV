import { Component, OnInit } from '@angular/core';
import { InfobasicoService } from 'src/app/services/infobasico.service';
import { InforedsocialService } from '../../services/inforedsocial.service';

@Component({
  selector: 'app-sidebarperfil',
  templateUrl: './sidebarperfil.component.html',
  styleUrls: ['./sidebarperfil.component.css']
})
export class SidebarperfilComponent implements OnInit {

  constructor(public inforedsocialService:InforedsocialService,
              public infobasicoService: InfobasicoService) { }

  ngOnInit() {
  }

}
