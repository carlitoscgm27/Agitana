import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDonanteComponent } from './inicio-donante.component';

describe('InicioDonanteComponent', () => {
  let component: InicioDonanteComponent;
  let fixture: ComponentFixture<InicioDonanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioDonanteComponent]
    });
    fixture = TestBed.createComponent(InicioDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
