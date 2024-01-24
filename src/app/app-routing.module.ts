import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewItemComponent } from './items/new-item/new-item.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { EditItemComponent } from './items/edit-item/edit-item.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
   {
     path: 'about',
     component: AboutComponent,
   },
  {
     path: 'login',
     component: LoginComponent,
   },
   {
     path: 'register',
     component: RegisterComponent,
   },
   {
     path: 'profile',
     component: ProfileComponent,
   },
   {
     path: 'catalogue',
     component: CatalogueComponent,
   },
   {
    path: 'new-item',
    component: NewItemComponent,
  },
   {
    path: 'edit',
    component: EditItemComponent,
  },
  {
    path: 'details',
    component: ItemDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
 
