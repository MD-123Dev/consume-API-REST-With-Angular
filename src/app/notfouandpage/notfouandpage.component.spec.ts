import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfouandpageComponent } from './notfouandpage.component';

describe('NotfouandpageComponent', () => {
  let component: NotfouandpageComponent;
  let fixture: ComponentFixture<NotfouandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfouandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfouandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
