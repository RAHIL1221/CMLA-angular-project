import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ListAnnouncementsComponent } from './component/announcements/list-announcement/list-announcements.component';
import { AddAnnouncementComponent } from './component/announcements/add-announcement/add-announcement.component';
import { UpdateAnnouncementComponent } from './component/announcements/update-announcement/update-announcement.component';
import { ListProdcastComponent } from './component/prodcast/list-prodcast/list-prodcast.component';
import { AddProdcastComponent } from './component/prodcast/add-prodcast/add-prodcast.component';
import { UpdateProdcastComponent } from './component/prodcast/update-prodcast/update-prodcast.component';
import { ListBannerComponent } from './component/banner/list-banner/list-banner.component';
import { AddBannerComponent } from './component/banner/add-banner/add-banner.component';
import { UpdateBannerComponent } from './component/banner/update-banner/update-banner.component';
import { UpdateFeatureEventsComponent } from './component/feature-events/update-feature-events/update-feature-events.component';
import { ListFeatureEventsComponent } from './component/feature-events/list-feature-events/list-feature-events.component';
import { AddFeatureEventsComponent } from './component/feature-events/add-feature-events/add-feature-events.component';
import { ListMoreLinksComponent } from './component/more-links/list-more-links/list-more-links.component';
import { AddMoreLinksComponent } from './component/more-links/add-more-links/add-more-links.component';
import { UpdateMoreLinksComponent } from './component/more-links/update-more-links/update-more-links.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HeaderComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user-profile',
                component: UserProfileComponent
            },
            {
                path: 'list-annoucements',
                component: ListAnnouncementsComponent
            },
            {
                path: 'add-annoucements',
                component: AddAnnouncementComponent
            },
            {
                path: 'update-announcement/:id', 
                component: UpdateAnnouncementComponent
            },
            {
                path: 'list-prodcasts',
                component: ListProdcastComponent
            },
            {
                path: 'add-prodcasts',
                component: AddProdcastComponent
            },
            {
                path: 'update-prodcast/:id', 
                component: UpdateProdcastComponent
            },
            {
                path: 'list-banner', 
                component: ListBannerComponent
            },
            {
                path: 'add-banner', 
                component: AddBannerComponent
            },
            {
                path:'update-banner/:id',
                component:UpdateBannerComponent
            },
            {
                path: 'list-feature-events', 
                component: ListFeatureEventsComponent
            },
            {
                path: 'add-feature-events', 
                component: AddFeatureEventsComponent
            },
            {
                path:'update-feature-events/:id',
                component:UpdateFeatureEventsComponent
            },
            {
                path: 'list-more-links', 
                component: ListMoreLinksComponent
            },
            {
                path: 'add-more-links', 
                component: AddMoreLinksComponent
            },
            {
                path:'update-more-links/:id',
                component:UpdateMoreLinksComponent
            }            
        ]
    }
];
