import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeTemplateViewerComponent } from './resume-template-viewer/resume-template-viewer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FixBottomDirective } from './fix-bottom-directive';

@Component({
  selector: 'app-build-resume',
  imports: [RouterOutlet, SidebarComponent, ResumeTemplateViewerComponent, CommonModule, FixBottomDirective],
  templateUrl: './build-resume.component.html',
  styleUrl: './build-resume.component.css'

})
export class BuildResumeComponent implements AfterViewInit {


  viewTemplateModal: boolean = false;
  previewTemplateClicked = false;

  previewResume() {

  }

  previewTemplate() {
    if (!this.previewTemplateClicked) {
      this.previewTemplateClicked = true;
    }
  }

  setTemplateModalView() {
    if (!(window.innerWidth > 768)) {
      this.viewTemplateModal = true;
    } else {
      this.viewTemplateModal = false;
    }
  }

  ngAfterViewInit() {
    this.setTemplateModalView();
  }

  closeTemplateCliecked() {
    if (this.previewTemplateClicked) {
      this.previewTemplateClicked = false;
    }
  }

  @HostListener('window:resize', ['$event']) 
      onResize(event: Event) {
        this.setTemplateModalView();
        
      }
}
