import { Component, OnInit } from '@angular/core';
import { AllCoursesType, CategoriesType, CurrentlyAttendingType, PopularLecturersType } from '../../services/learning-app-model';
import { LearningAppService } from '../../services/learning-app.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  public learningAppCurrentlyAttending!: CurrentlyAttendingType[];
  public learningAppCategories!: CategoriesType[];
  public learningAppPopularLecturers!: PopularLecturersType[];

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getCurrentlyAttending().subscribe(data => this.learningAppCurrentlyAttending = data);
    this.learningAppService.getCategories().subscribe(data => this.learningAppCategories = data);
    this.learningAppService.getPopularLecturers().subscribe(data => this.learningAppPopularLecturers = data);
  }
}
