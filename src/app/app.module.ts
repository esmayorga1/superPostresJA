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
import { FooterComponent } from './footer/footer.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mision', component: MisionVisionComponent},
  {path: 'postres/:id', component: ProductoDetalleComponent},
  {path: 'postres/2', component: ProductoDetalleComponent},
  {path: 'postres/4', component: ProductoDetalleComponent},
  {path: 'postres/1', component: ProductoDetalleComponent},

 
  
 
  ];
  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    EmpresaComponent,
    ContactenosComponent,
    PostresComponent,
    NuestrosPostesComponent,
    FooterComponent,
    MisionVisionComponent,
    HomeComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
