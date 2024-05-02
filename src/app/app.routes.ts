import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { HomeComponent } from './pages/website/home/home.component';


export const routes: Routes = [
  
    {path:'',component:LandingComponent ,children:[
        {path:'',component:HomeComponent}

    ]}
 
    
];
