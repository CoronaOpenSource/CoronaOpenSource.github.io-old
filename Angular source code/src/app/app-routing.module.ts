import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { EthicsComponent } from './ethics/ethics.component';
import { LicencesComponent } from './licences/licences.component';
import { ReagentsComponent } from './reagents/reagents.component';
import { AppComponent } from './app.component';
import { MissionComponent } from './mission/mission.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component:  BodyComponent},
  { path: 'strategy', component:  MissionComponent},
  { path: 'protocols', component:  ProtocolsComponent},
  { path: 'ethics', component:  EthicsComponent},
  { path: 'licences', component:  LicencesComponent},
  { path: 'media', component:  MediaComponent},
];


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
