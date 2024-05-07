import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { HomeComponent } from './pages/website/home/home.component';
import { VegetablesComponent } from './pages/website/vegetables/vegetables.component';
import { BeansOkraComponent } from './pages/website/beans-okra/beans-okra.component';




export const routes: Routes = [
  
    {path:'',component:LandingComponent ,children:[
        {path:'',component:HomeComponent},
        {path:'vegetbles',component:VegetablesComponent},
        {path:'beans',component:BeansOkraComponent}
        ]},
    
        
 
    
];
