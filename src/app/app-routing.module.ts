import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';
import {LayoutComponent} from './layouts/layout.component';

const routes: Routes = [
	{
		path: 'account',
		loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
	},
	// tslint:disable-next-line: max-line-length
	{
		path: '',
		component: LayoutComponent,
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy'})],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
