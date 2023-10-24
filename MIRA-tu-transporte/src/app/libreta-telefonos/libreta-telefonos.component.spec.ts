import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretaTelefonosComponent } from './libreta-telefonos.component';

describe('LibretaTelefonosComponent', () => {
  let component: LibretaTelefonosComponent;
  let fixture: ComponentFixture<LibretaTelefonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibretaTelefonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretaTelefonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
