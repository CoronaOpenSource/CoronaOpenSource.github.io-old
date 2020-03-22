import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.sass']
})
export class ProtocolsComponent implements OnInit {
  public showOptions; 
  public showOptionsAnalysis; 
  public location; 
  public locationAnalysis; 

  constructor() { }

  ngOnInit() {
  }

}
