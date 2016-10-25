import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';
import { ProfileComponent }  from './profile/profile.component';
import { MatchInfoComponent }  from './profile/match-info/match-info.component';

const routes: Routes = [
    { path: '',  component: HomeComponent},
    { path: '**', component: HomeComponent },
	{ path: 'pick', component: HomeComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'profile/matches/:id', component: MatchInfoComponent }
];

export const routing = RouterModule.forRoot(routes);