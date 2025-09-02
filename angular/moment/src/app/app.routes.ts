import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { NewMomentComponent } from './components/new-moment/new-moment.component';
import { MomentComponent } from './components/page/moment/moment.component';
import { EditMomentComponent } from './components/page/edit-moment/edit-moment.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'moments/new', component: NewMomentComponent},
    {path: 'moments/edit/:id', component: EditMomentComponent},
    {path: 'moments/:id', component: MomentComponent}

];
