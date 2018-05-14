import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewFormComponent } from './user-review-form.component';

describe('UserReviewFormComponent', () => {
  let component: UserReviewFormComponent;
  let fixture: ComponentFixture<UserReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
