import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopaComponent } from './popa.component';

describe('PopaComponent', () => {
  let component: PopaComponent;
  let fixture: ComponentFixture<PopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
