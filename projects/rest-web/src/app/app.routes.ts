import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BeefComponent } from './beef/beef.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DessertComponent } from './dessert/dessert.component';
import { LambComponent } from './lamb/lamb.component';
import { TacosComponent } from './tacos/tacos.component';
import { PastaComponent } from './pasta/pasta.component';
import { PorkComponent } from './pork/pork.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { SideComponent } from './side/side.component';
import { StarterComponent } from './starter/starter.component';
import { VeganComponent } from './vegan/vegan.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { GoatComponent } from './goat/goat.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'location', component:LocationComponent},
    {path:'contact', component:ContactComponent},
    {path:'about', component:AboutComponent},
    {path:'beef', component:BeefComponent},
    {path:'chicken', component:ChickenComponent},
    {path:'dessert', component:DessertComponent},
    {path:'lamb', component:LambComponent},
    {path:'tacos', component:TacosComponent},
    {path:'pasta', component:PastaComponent},
    {path:'pork', component:PorkComponent},
    {path:'seafood', component:SeafoodComponent},
    {path:'side', component:SideComponent},
    {path:'starter', component:StarterComponent},
    {path:'vegan', component:VeganComponent},
    {path:'vegetarian', component:VegetarianComponent},
    {path:'breakfast', component:BreakfastComponent},
    {path:'goat', component:GoatComponent},
    {path:'menucard', component:MenuCardComponent}
    
];
