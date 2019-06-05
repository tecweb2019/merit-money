import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasTransferenciasComponent } from './minhas-transferencias.component';

describe('MinhasTransferenciasComponent', () => {
  let component: MinhasTransferenciasComponent;
  let fixture: ComponentFixture<MinhasTransferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasTransferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
