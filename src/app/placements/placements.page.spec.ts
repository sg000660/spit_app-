import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacementsPage } from './placements.page';

describe('PlacementsPage', () => {
  let component: PlacementsPage;
  let fixture: ComponentFixture<PlacementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
