import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirMoedasComponent } from "./TransferirMoedasComponent";

describe('TransferirMoedasComponent', () => {
  let component: TransferirMoedasComponent;
  let fixture: ComponentFixture<TransferirMoedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferirMoedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferirMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
