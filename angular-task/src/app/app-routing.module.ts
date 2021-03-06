import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
