import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
/**
 * Created by ehigginsiii on 1/31/17.
 */

export const routerConfig: Route[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]
