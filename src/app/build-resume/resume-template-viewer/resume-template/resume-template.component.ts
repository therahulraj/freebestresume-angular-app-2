import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Resume } from '../../model/resume.model';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { SetScaleDirective } from './set-scale-directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  imports: [SetScaleDirective, FormsModule, CommonModule],
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
    @Input() resume?: Resume;
    firstPrsent: boolean = false;
    secPresent: boolean = false;
    resumeDetails: Resume = new Resume();
    // skillsGroupView: TemplateRef<NgIfContext<boolean|undefined>>|null;
    // scaleValue: number = 1;
    // scaleString: string = `scaleX(` + this.scaleValue + `)`;
    // @ViewChild('myDiv') myDivRef: ElementRef | undefined = undefined;
    


    // @HostListener('window:resize', ['$event']) 
    //   onResize(event: Event) {
    //     console.log(event, "resized")
    //     console.log(this.myDivRef!.nativeElement.offsetWidth);
    //     this.scaleValue = 0.8;
    //     console.log(this.scaleValue);
    //     this.scaleString = `scale(` + this.scaleValue + `)`;
    //     console.log(this.scaleString);
    // }

  constructor(private resumeDetailsService: ResumeDetailsService) { 
    this.resumeDetails = this.resumeDetailsService.resume;
    this.firstPrsent = false;
    
  }

  ngOnInit(): void {
    this.firstPrsent = false;

  }

  isNotEmpty(value: any): boolean {
    return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
  }

  isAnyPresent(values: any[]): boolean {
    if (this.isNotEmpty(values)) {
      for (let i = 0; i < values.length; i++) {
        if (this.isNotEmpty(values[i])) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  isAllPresent(values: any[]): boolean {
    if (this.isNotEmpty(values)) {
      for (let j = 0; j < values.length; j++) {
        if(!this.isNotEmpty(values[j])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
 


}
