import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoOverviewPageComponent } from './login-info-overview-page.component';

describe('PasswordOverviewPageComponent', () => {
  let component: LoginInfoOverviewPageComponent;
  let fixture: ComponentFixture<LoginInfoOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInfoOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfoOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
