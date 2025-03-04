import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraComponent } from './figura.component';

describe('FiguraComponent', () => {
  let component: FiguraComponent;
  let fixture: ComponentFixture<FiguraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiguraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
