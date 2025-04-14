import { Component, DoCheck, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { Experience } from '../../model/experience.model';
import { Item } from '../../model/item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObjectUtilsService } from '../../services/object-utils.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PreviousRouteService } from '../../services/previous-router-service';
import { PopupModal } from '../../model/popup-modal.model';
import { CommonVariablesService } from '../../services/common-variables.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-details.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent extends ObjectUtilsService implements OnInit, DoCheck {

    experiences: Experience[] = [];
    details: string[] = []
    showDummy: boolean = true;
    sectionTouched: boolean = false;
    editExpereinceUrlregex = /experience-details\/\d+/;
    subscriptions: Subscription = new Subscription();

  constructor(private resumeDetailsService: ResumeDetailsService, 
    private router: Router, 
    private route: ActivatedRoute,
    private previousRouteService: PreviousRouteService,
  private commonVariablesService : CommonVariablesService) {
    super();
   }

   setupEmptyDummyExperience() {
    this.experiences.push(new Experience());
    this.experiences[0].responsibilities.push(new Item());
    this.resumeDetailsService.resume.experiences = this.experiences;
    this.editExperience(0);
   }

  ngDoCheck(): void {
    // for (let i = 0; i < this.experiences.length; i++) {
      // console.log(this.sectionTouched && this.isArrayNotEmpty(this.experiences), "touchedddd");
      // if (this.showDummy && !this.sectionTouched && this.isArrayNotEmpty(this.experiences)) {
      //   this.resumeDetailsService.resume.experiences = this.experiences;
      //   this.sectionTouched = true;
      // }
  }

  isPreviousUrlFromEditExperience() {
    const previousUrl = this.previousRouteService.getPreviousUrl();
    if (previousUrl?.match(this.editExpereinceUrlregex)) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    if (this.resumeDetailsService.emptyExperienceSection) {
      if (!this.isPreviousUrlFromEditExperience()) {
        this.setupEmptyDummyExperience();
      } else {
        if (this.resumeDetailsService.resume.experiences) {
          this.experiences = this.resumeDetailsService.resume.experiences;
        }
      }
    } else {
      if (this.resumeDetailsService.resume.experiences) {
        this.experiences = this.resumeDetailsService.resume.experiences;
      } else {
        this.setupEmptyDummyExperience();
      }
    }

    this.subscriptions.add(this.commonVariablesService.modalPopupButtonValue.subscribe(buttonValue => {
      if (buttonValue === this.commonVariablesService.CANCEL_EXPERIENCE) {
        this.commonVariablesService.emitHidePopupModal(true);
      } else if (buttonValue === this.commonVariablesService.CONTINUE_EMPTY_EXPERIENCE) {
        this.commonVariablesService.emitHidePopupModal(true);
        this.router.navigate(['../skill-details'], {relativeTo: this.route});
      }
    }))
    

  }

  addItem(experience: Experience) {
    experience.responsibilities.push(new Item());
  }

  removeItem(experience: Experience, index: number) {
    if (index >= 0 && index < experience.responsibilities.length) {
      experience.responsibilities.splice(index, 1);
    }
  }

  addExperience() {
    const experience = new Experience();
    experience.responsibilities.push(new Item());
    this.experiences.push(experience);
    console.log(this.experiences.length, "lengthhhhhhhhh");
    this.editExperience(this.experiences.length - 1);
  }

  removeExperience(index: number) {
    console.log(index, "remove index");
    
    if (index >= 0 && index < this.experiences.length) {
      console.log(this.experiences, "remove Index")
      this.experiences.splice(index, 1);
    }
  }

  showPopupModal() {
      const popModal = new PopupModal();
      popModal.text = "You have not entered any content. Do you still want continue to next section?";
      popModal.button = [{buttonText: this.commonVariablesService.CANCEL, buttonValue: this.commonVariablesService.CANCEL_EXPERIENCE}, 
                        {buttonText: "Continue", buttonValue: this.commonVariablesService.CONTINUE_EMPTY_EXPERIENCE}];
      this.commonVariablesService.emitPopupModal(popModal);
    }

  goToNextSection() {
    if (this.experiences.length) {
      this.router.navigate(['../skill-details'], {relativeTo: this.route});
    } else {
      this.showPopupModal();
    }
  }

  editExperience(index: number) {
    console.log(this.getIdFromIndex(index), "getIdFromIndexxxxxx");
    this.router.navigate(['./', this.getIdFromIndex(index)], {relativeTo: this.route});
  }

  getIdFromIndex(index: number): number {
    console.log(index, "indexxxxxx");
    return index + 1;
  }



}
