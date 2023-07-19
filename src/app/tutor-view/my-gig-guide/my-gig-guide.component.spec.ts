import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGigGuideComponent } from './my-gig-guide.component';

describe('MyGigGuideComponent', () => {
  let component: MyGigGuideComponent;
  let fixture: ComponentFixture<MyGigGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGigGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGigGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
