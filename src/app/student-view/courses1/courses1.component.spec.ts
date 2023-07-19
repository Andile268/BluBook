import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgcFormsModule, IgxChipsModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { Courses1Component } from './courses1.component';

describe('Courses1Component', () => {
  let component: Courses1Component;
  let fixture: ComponentFixture<Courses1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courses1Component ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgcFormsModule, IgxChipsModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Courses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
