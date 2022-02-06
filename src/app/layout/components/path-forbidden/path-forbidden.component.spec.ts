import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathForbiddenComponent } from './path-forbidden.component';

describe('PathForbiddenComponent', () => {
  let component: PathForbiddenComponent;
  let fixture: ComponentFixture<PathForbiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathForbiddenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
