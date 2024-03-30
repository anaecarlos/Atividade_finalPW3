import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoComponent } from './conjunto.component';

describe('ConjuntoComponent', () => {
  let component: ConjuntoComponent;
  let fixture: ComponentFixture<ConjuntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConjuntoComponent]
    });
    fixture = TestBed.createComponent(ConjuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
