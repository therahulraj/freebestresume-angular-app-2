import { Component, OnInit } from '@angular/core';
import { Education } from '../../model/education.model';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { ObjectUtilsService } from '../../services/object-utils.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eduction-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './education-details.component.html',
  styleUrl: './education-details.component.css'
})
export class EducationDetailsComponent extends ObjectUtilsService implements OnInit {
  educations: Education[] = [];

  constructor(private resumeDetailsService: ResumeDetailsService) {
    super();
  }

  ngOnInit(): void {
    if (this.resumeDetailsService.resume?.educations) {
      this.educations = this.resumeDetailsService.resume.educations;
      console.log(this.educations, "educationssss");
    }
  }

  addEducation() {
    this.educations.push(new Education());
  }

  removeEducation(index: number) {
    if (index >= 0 && index < this.educations.length) {
      // console.log(this.experiences, "remove Index")
      this.educations.splice(index, 1);
    }
  }


}
