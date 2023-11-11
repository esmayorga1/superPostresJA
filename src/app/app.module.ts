import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { PostresComponent } from './postres/postres.component';
import { NuestrosPostesComponent } from './nuestros-postes/nuestros-postes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    EmpresaComponent,
    ContactenosComponent,
    PostresComponent,
    NuestrosPostesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
