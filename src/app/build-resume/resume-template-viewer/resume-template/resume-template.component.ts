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
    this.resumeDetails = this.resumeDetailsService.resume;
    this.firstPrsent = false;
    
  }

  ngOnInit(): void {
    this.firstPrsent = false;

  }

  isNotEmpty(value: any): boolean {
    return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
  }

  isPrimitiveNotEmpty(value: any): boolean {
    return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
  }

  isNotEmpty1(value: any): boolean {
    if (this.isPrimitive(value)) {
      return this.isPrimitiveNotEmpty(value);
    } else if (Array.isArray(value)) {
      return this.isArrayNotEmpty(value);
    }
    return this.isObjectNotEmpty(value);
  }

  isPrimitive(value: any): boolean {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'undefined' ||
      typeof value === 'symbol' ||
      typeof value === 'bigint' ||
      value === null
    );
  }

  isArrayNotEmpty(value: any): boolean {
    for (let item of value) {
      if (this.isPrimitive(item)) {
        return this.isPrimitiveNotEmpty(item);
      } else if (Array.isArray(item)) {
        return this.isArrayNotEmpty(item);
      }
      return this.isObjectNotEmpty(item);
    }
    return false;
  }
  

  isObjectNotEmpty(obj: any): boolean {
    for(let key in obj) {
      if (this.isPrimitive(obj[key])) {
        return this.isPrimitiveNotEmpty(obj[key]);
      } else if (Array.isArray(obj[key])) {
        return this.isArrayNotEmpty(obj[key]);
      }
      return this.isObjectNotEmpty(obj[key]);
    }
    return false;
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
