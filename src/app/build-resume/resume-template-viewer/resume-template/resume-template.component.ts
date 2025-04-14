import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Resume } from '../../model/resume.model';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { SetScaleDirective } from './set-scale-directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObjectUtilsService } from '../../services/object-utils.service';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent extends ObjectUtilsService implements OnInit {
    @Input() containerWidth: number | undefined;
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
    super();
    this.resumeDetails = this.resumeDetailsService.resume;
    this.firstPrsent = false;
  }

  ngOnInit(): void {
    this.firstPrsent = false;
    console.log(this.resumeDetails.personal?.otherFields, "Otherohterfields");
    console.log(this.isNotEmpty(this.resumeDetails.personal?.otherFields), "otherFields");

  }

  
 


}
