import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { NewsComponent }  from './news/news.component';
import { NewsDetailComponent }  from './news/news-detail/news-detail.component';
import { ProfileComponent }  from './profile/profile.component';
import { MatchInfoComponent }  from './profile/match-info/match-info.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pick', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/matches/:id', component: MatchInfoComponent },
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
