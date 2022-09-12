import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleComponent } from './pages/single/single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SendComponent } from './pages/send/send.component';


const app_routes:Routes = [  
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog', component: BlogComponent },
  { path:'single', component: SingleComponent },
  { path:'contact', component: ContactComponent },
  { path:'send/:email/:opcion/:nombre/:subject/:mensaje', component: SendComponent },
  { path:'**',pathMatch:'full',redirectTo:'home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(app_routes)
  ],
  exports:[ RouterModule ]
  
})
export class AppRoutingModule { }