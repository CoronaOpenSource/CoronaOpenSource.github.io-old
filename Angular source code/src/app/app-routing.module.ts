import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { EthicsComponent } from './ethics/ethics.component';
import { ReagentsComponent } from './reagents/reagents.component';
import { AppComponent } from './app.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  { path: '', redirectTo:"home", pathMatch:"full" }, 
  { path: 'home', component:  BodyComponent}, 
  { path: 'mission', component:  MissionComponent}, 
  { path: 'protocols', component:  ProtocolsComponent}, 
  { path: 'ethics', component:  EthicsComponent}, 
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
