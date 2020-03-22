import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReagentsComponent } from './reagents.component';

describe('ReagentsComponent', () => {
  let component: ReagentsComponent;
  let fixture: ComponentFixture<ReagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
