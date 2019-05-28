import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListDetailComponent } from './recipe-list-detail.component';

describe('RecipeListDetailComponent', () => {
  let component: RecipeListDetailComponent;
  let fixture: ComponentFixture<RecipeListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
