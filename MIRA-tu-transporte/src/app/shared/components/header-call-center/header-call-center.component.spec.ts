import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCallCenterComponent } from './header-call-center.component';

describe('HeaderCallCenterComponent', () => {
  let component: HeaderCallCenterComponent;
  let fixture: ComponentFixture<HeaderCallCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCallCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
