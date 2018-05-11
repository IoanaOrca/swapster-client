import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditPageComponent } from './item-edit-page.component';

describe('ItemEditPageComponent', () => {
  let component: ItemEditPageComponent;
  let fixture: ComponentFixture<ItemEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
