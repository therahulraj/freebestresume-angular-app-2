import { AfterViewInit, Component, HostListener, Output } from '@angular/core';
import { ResumeDetailsComponent } from './resume-details/resume-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResumeTemplateViewerComponent } from './resume-template-viewer/resume-template-viewer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FixBottomDirective } from './fix-bottom-directive';
import { NgxPrintModule } from 'ngx-print';
import { CommonVariablesService } from './services/common-variables.service';
import { PopupModalComponent } from "./ui/popup-modal/popup-modal.component";

@Component({
  selector: 'app-build-resume',
  imports: [RouterOutlet, SidebarComponent, ResumeTemplateViewerComponent, CommonModule, NgxPrintModule, PopupModalComponent],
  templateUrl: './build-resume.component.html',
  styleUrl: './build-resume.component.css'

})
export class BuildResumeComponent implements AfterViewInit {


  templateModalView: boolean = false;
  previewTemplateClicked = false;

  constructor(private commonVariablesService: CommonVariablesService) {}

  previewTemplate() {
    if (!this.previewTemplateClicked) {
      this.previewTemplateClicked = true;
    }
  }

  setTemplateModalView() {
    if (!(window.innerWidth > 768)) {
      this.templateModalView = true;
    } else {
      this.templateModalView = false;
    }
    this.commonVariablesService.templateModalView.next(this.templateModalView);
    
  }

  ngAfterViewInit() {
    this.setTemplateModalView();
    this.commonVariablesService.templateModalView.next(this.templateModalView);
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
