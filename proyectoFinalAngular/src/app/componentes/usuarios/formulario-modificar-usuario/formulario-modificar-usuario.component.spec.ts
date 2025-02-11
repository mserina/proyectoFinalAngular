import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModificarUsuarioComponent } from './formulario-modificar-usuario.component';

describe('FormularioModificarUsuarioComponent', () => {
  let component: FormularioModificarUsuarioComponent;
  let fixture: ComponentFixture<FormularioModificarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioModificarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
