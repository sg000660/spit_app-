import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmissionPage } from './admission.page';

describe('AdmissionPage', () => {
  let component: AdmissionPage;
  let fixture: ComponentFixture<AdmissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
