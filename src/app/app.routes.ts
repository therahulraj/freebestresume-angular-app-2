import { Routes } from '@angular/router';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { ResumeDetailsComponent } from './build-resume/resume-details/resume-details.component';
import { PersonalDetailsComponent } from './build-resume/resume-details/personal-details/personal-details.component';
import { ExperienceDetailsComponent } from './build-resume/resume-details/experience-details/experience-details.component';
import { SkillDetailsComponent } from './build-resume/resume-details/skill-details/skill-details.component';

export const routes: Routes = [
    { path: 'build-resume', component: BuildResumeComponent, children: [
      { path: '', component: ResumeDetailsComponent, children: [
        { path: 'personal-details', component: PersonalDetailsComponent },
        { path: 'experience-details', component: ExperienceDetailsComponent },
        { path: 'skill-details', component: SkillDetailsComponent }
      ] }
    ]}
  ];
