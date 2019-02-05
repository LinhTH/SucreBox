import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordOverviewPageComponent } from './password-overview-page.component';

describe('PasswordOverviewPageComponent', () => {
  let component: PasswordOverviewPageComponent;
  let fixture: ComponentFixture<PasswordOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
