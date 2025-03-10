import { Component, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { Experience } from '../../model/experience.model';
import { Item } from '../../model/item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-details.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

    experiences: Experience[] = [];
    details: string[] = []

  constructor(private resumeDetailsService: ResumeDetailsService) { }

  ngOnInit(): void {
    // console.log(this.resumeDetailsService.resume);
    if (this.resumeDetailsService.resume?.experiences) {
        this.experiences = this.resumeDetailsService.resume.experiences;
        console.log(this.experiences, "experience details");
    }
  }

  addItem(experience: Experience) {
    let item = new Item();
    experience.responsibilities.push(item);
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



}
