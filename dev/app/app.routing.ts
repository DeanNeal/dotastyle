import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';
import { ProfileComponent }  from './profile/profile.component';

const routes: Routes = [
    { path: '',  component: HomeComponent},
    //{ path: '**', component: PageNotFoundComponent },
	{ path: 'pick', component: HomeComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'profile', component: ProfileComponent }
];

export const routing = RouterModule.forRoot(routes);