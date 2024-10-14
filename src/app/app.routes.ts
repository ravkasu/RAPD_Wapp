import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AgreementComponent } from './agreement/agreement.component';
import { TestingServicesComponent } from './testing-services/testing-services.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ModernslaveryComponent } from './modernslavery/modernslavery.component';
import { QaadvisoryserviceComponent } from './qaadvisoryservice/qaadvisoryservice.component';
import { ProjectresourcesolutionsComponent } from './projectresourcesolutions/projectresourcesolutions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   
  { path: 'home', component: HomeComponent },            
  { path: 'about', component: AboutComponent },          
  { path: 'contact', component: ContactComponent },   
  { path: 'qaadvisoryservice', component: QaadvisoryserviceComponent }, 
  { path: 'testingservices', component: TestingServicesComponent },    
  { path: 'projectresourcesolutions', component: ProjectresourcesolutionsComponent },        
  { path: 'privacypolicy', component: PrivacypolicyComponent },          
  { path: 'agreement', component: AgreementComponent },
  { path: 'modernslavery', component: ModernslaveryComponent }, 
  { path: '**', redirectTo: 'home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],  // useHash option is disabled for cleaner URLs
  exports: [RouterModule]
})
export class AppRoutingModule { }
