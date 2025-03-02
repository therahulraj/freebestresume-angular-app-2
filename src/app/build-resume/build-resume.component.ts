import { Component } from '@angular/core';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeTemplateViewerComponent } from './resume-template-viewer/resume-template-viewer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-build-resume',
  imports: [RouterOutlet, SidebarComponent, ResumeTemplateViewerComponent],
  templateUrl: './build-resume.component.html',
  styleUrl: './build-resume.component.css'
})
export class BuildResumeComponent {

}
