import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFreelancerComponent } from './public-freelancer.component';

describe('PublicFreelancerComponent', () => {
  let component: PublicFreelancerComponent;
  let fixture: ComponentFixture<PublicFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
