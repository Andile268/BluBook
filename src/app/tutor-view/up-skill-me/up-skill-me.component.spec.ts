import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgcFormsModule, IgxChipsModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { UpSkillMeComponent } from './up-skill-me.component';

describe('UpSkillMeComponent', () => {
  let component: UpSkillMeComponent;
  let fixture: ComponentFixture<UpSkillMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpSkillMeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgcFormsModule, IgxChipsModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpSkillMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
