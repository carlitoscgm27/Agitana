import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRecibidorComponent } from './inicio-recibidor.component';

describe('InicioRecibidorComponent', () => {
  let component: InicioRecibidorComponent;
  let fixture: ComponentFixture<InicioRecibidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioRecibidorComponent]
    });
    fixture = TestBed.createComponent(InicioRecibidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
