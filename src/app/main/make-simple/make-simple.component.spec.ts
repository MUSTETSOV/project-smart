import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSimpleComponent } from './make-simple.component';

describe('MakeSimpleComponent', () => {
  let component: MakeSimpleComponent;
  let fixture: ComponentFixture<MakeSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
