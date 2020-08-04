import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './posts/panel/panel.component';
import { FormsModule } from '@angular/forms'
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { format } from 'url';
import { ContenuComponent } from './home/contenu/contenu.component';
import { NotfouandpageComponent } from './notfouandpage/notfouandpage.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {
    path: "",
    component: ContenuComponent
  },

  {
    path: "home",
    component: ContenuComponent
  },

  {
    path: "post",
    component: PanelComponent
  },

  {
    path: "**",
    component: NotfouandpageComponent
  }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelComponent,
    ContenuComponent,
    NotfouandpageComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
