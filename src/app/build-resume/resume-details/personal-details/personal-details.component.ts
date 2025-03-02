import { Component, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Personal } from '../../model/personal.model';
import { LinkText } from '../../model/link-text.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  resumePersonalDetails: Personal = new Personal();
  emptyString: string = "";
  firstName: string = "";
  linkText: Array<boolean> = [];

  constructor(private resumeDetailsService: ResumeDetailsService) { }
  personalDetailsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.resumeDetailsService.resume?.personal) {
      this.resumePersonalDetails = this.resumeDetailsService.resume?.personal;
      console.log(this.resumePersonalDetails, "personal details");
    }
    console.log("personal");

    this.personalDetailsForm = new FormGroup({
      'firstName': new FormControl(this.resumePersonalDetails?.firstName),
      'lastName': new FormControl(this.resumePersonalDetails?.lastName),
      'otherFields': new FormArray([])
      
    })

    if (this.resumeDetailsService.isNotEmpty(this.resumeDetailsService.resume)) {


    }

  }

  isNullOrUndefined(value: any): boolean {
    return value == null;
  }


  setNotNullValue(value: any): any {
    if(value == null) {
      return null;
    } else {
      value;
    }
  }

  removeOtherField(index: number) {
    if (index >= 0 && index < this.resumePersonalDetails.otherFields.length) {
      this.resumePersonalDetails.otherFields.splice(index, 1);
    }
  }

  addField(isLink: boolean) {
    let linkText = new LinkText();
    linkText.isLink = isLink;
    this.resumePersonalDetails.otherFields.push(linkText);
  }

  showLinkText(index: number) {
    this.linkText[index] = true;
  }


}

