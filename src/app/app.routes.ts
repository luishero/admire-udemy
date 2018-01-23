import { RouterModule, Routes } from '@angular/router'; // agregamos el RouterModule

import { PagesComponent } from './pages/pages.component';

// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
 import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';










const appRoutes: Routes = [
    // { path: '',
    //  component: PagesComponent, // con espacio vacio estas va a PaCo, rutas trabajan con el router-outlet secundario
    // children: [

    //     { path: 'dashboard', component: DashboardComponent},
    //     { path: 'progress', component: ProgressComponent },
    //     { path: 'graficas1', component: Graficas1Component },
    //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    //             ]
    // }, // cualqier ruta nos lleva a PagesComponent

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } ); // forRoot para las rutas principales, usamos el hash
//  cuando lleva la palabra Module va siempre en imports[]

