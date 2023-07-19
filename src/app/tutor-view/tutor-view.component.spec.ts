import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { TutorViewComponent } from './tutor-view.component';

describe('TutorViewComponent', () => {
  let component: TutorViewComponent;
  let fixture: ComponentFixture<TutorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
