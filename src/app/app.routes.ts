import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { FirebaseComponent } from './pages/firebase/firebase.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'info', component: InfoComponent},
    {path: 'firebase', component: FirebaseComponent}
];
