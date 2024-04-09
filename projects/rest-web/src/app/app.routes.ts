import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'location', component:LocationComponent},
    {path:'contact', component:ContactComponent},
    {path:'about', component:AboutComponent}
    
];
