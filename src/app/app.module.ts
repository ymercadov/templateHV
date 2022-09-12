import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarperfilComponent } from './shared/sidebarperfil/sidebarperfil.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleComponent } from './pages/single/single.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SendComponent } from './pages/send/send.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarperfilComponent,
    AboutComponent,
    BlogComponent,
    SingleComponent,
    ContactComponent,
    HomeComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
