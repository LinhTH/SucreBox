import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBasicComponent } from './list-basic.component';

describe('ListBasicComponent', () => {
  let component: ListBasicComponent;
  let fixture: ComponentFixture<ListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
