import { Routes } from '@angular/router';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { ResumeDetailsComponent } from './build-resume/resume-details/resume-details.component';
import { PersonalDetailsComponent } from './build-resume/resume-details/personal-details/personal-details.component';
import { ExperienceDetailsComponent } from './build-resume/resume-details/experience-details/experience-details.component';
import { SkillDetailsComponent } from './build-resume/resume-details/skill-details/skill-details.component';
import { EducationDetailsComponent } from './build-resume/resume-details/education-details/education-details.component';
import { ProjectDetailsComponent } from './build-resume/resume-details/project-details/project-details.component';
import { EditExperienceDetailsComponent } from './build-resume/resume-details/experience-details/edit-experience-details/edit-experience-details.component';

export const routes: Routes = [
    { path: 'build-resume', component: BuildResumeComponent, children: [
      { path: '', component: ResumeDetailsComponent, children: [
        { path: 'personal-details', component: PersonalDetailsComponent },
        { path: 'experience-details', component: ExperienceDetailsComponent },
        { path: 'experience-details/:id', component: EditExperienceDetailsComponent },
        { path: 'skill-details', component: SkillDetailsComponent },
        { path: 'education-details', component: EducationDetailsComponent },
        { path: 'project-details', component: ProjectDetailsComponent }] 
      }
    ]}
  ];
