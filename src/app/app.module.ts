
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';
// import { PagesComponent } from './pages/pages.component';

// Modulos
import { PagesModule } from './pages/pages.module'; // se registra en imports

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';

// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// temporal
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    // DashboardComponent,
    // Graficas1Component,
    // ProgressComponent,
    // PagesComponent,

    // NopagefoundComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,

    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
