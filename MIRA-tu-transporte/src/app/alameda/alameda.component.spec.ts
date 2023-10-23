import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlamedaComponent } from './alameda.component';

describe('AlamedaComponent', () => {
  let component: AlamedaComponent;
  let fixture: ComponentFixture<AlamedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlamedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlamedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
