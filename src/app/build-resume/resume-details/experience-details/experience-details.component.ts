import { Component, DoCheck, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { Experience } from '../../model/experience.model';
import { Item } from '../../model/item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObjectUtilsService } from '../../services/object-utils.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-details.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent extends ObjectUtilsService implements OnInit, DoCheck {

    experiences: Experience[] = [];
    details: string[] = []
    showDummy: boolean = true;
    sectionTouched: boolean = false;

  constructor(private resumeDetailsService: ResumeDetailsService, 
    private router: Router, 
    private route: ActivatedRoute) {
    super();
   }

   setupEmptyDummyExperience() {
    this.experiences.push(new Experience());
    this.experiences[0].responsibilities.push(new Item());
   }

  ngDoCheck(): void {
    // for (let i = 0; i < this.experiences.length; i++) {
      // console.log(this.sectionTouched && this.isArrayNotEmpty(this.experiences), "touchedddd");
      if (this.showDummy && !this.sectionTouched && this.isArrayNotEmpty(this.experiences)) {
        this.resumeDetailsService.resume.experiences = this.experiences;
        this.sectionTouched = true;
      }
  }

  ngOnInit(): void {
    if (this.showDummy) {
      this.setupEmptyDummyExperience();
    } else {
      if (this.resumeDetailsService.resume?.experiences) {
        this.experiences = this.resumeDetailsService.resume.experiences;
      }
    }
  }

  addItem(experience: Experience) {
    experience.responsibilities.push(new Item());
  }

  removeItem(experience: Experience, index: number) {
    if (index >= 0 && index < experience.responsibilities.length) {
      experience.responsibilities.splice(index, 1);
    }
  }

  addExperience() {
    let experience = new Experience();
    this.experiences.push(experience);
  }

  removeExperience(index: number) {
    console.log(index, "remove index");
    
    if (index >= 0 && index < this.experiences.length) {
      console.log(this.experiences, "remove Index")
      this.experiences.splice(index, 1);
    }
  }

  goToNextSection() {
    this.router.navigate(['../skill-details'], {relativeTo: this.route})
  }



}
