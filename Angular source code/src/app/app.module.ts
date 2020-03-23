import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { ReagentsComponent } from './reagents/reagents.component';
import { EthicsComponent } from './ethics/ethics.component';
import { LicensesComponent } from './licenses/licenses.component';
import { AppRoutingModule } from './app-routing.module';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    ProtocolsComponent,
    ReagentsComponent,
    EthicsComponent,
    LicensesComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
