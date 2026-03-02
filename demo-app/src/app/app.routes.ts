import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { Contactus } from './contactus/contactus';
import { Aboutus } from './aboutus/aboutus';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'services',component:Services},
    {path:'contactus',component:Contactus},
    {path:'aboutus',component:Aboutus},
    {path:'profile',component:Profile}
];
