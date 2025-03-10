import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Skills } from '../../model/skills.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-skill-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.css'
})
export class SkillDetailsComponent implements OnInit {
  // experiences: Experience[] = [];

  skills: Skills = new Skills();

  constructor(private resumeDetailsService: ResumeDetailsService) {}

  ngOnInit(): void {

    if(this.resumeDetailsService.resume?.skills) {
      this.skills = this.resumeDetailsService.resume.skills;
    }
      
  }


}
