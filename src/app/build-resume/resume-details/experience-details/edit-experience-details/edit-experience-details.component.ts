import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Experience } from '../../../model/experience.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResumeDetailsService } from '../../../services/resume-details.service';
import { Item } from '../../../model/item.model';
import { ObjectUtilsService } from '../../../services/object-utils.service';
import { CommonVariablesService } from '../../../services/common-variables.service';
import { Subscription } from 'rxjs';
import { PopupModalComponent } from '../../../ui/popup-modal/popup-modal.component';
import { PopupModal } from '../../../model/popup-modal.model';

@Component({
  selector: 'app-edit-experience-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-experience-details.component.html',
  styleUrl: './edit-experience-details.component.css'
})
export class EditExperienceDetailsComponent extends ObjectUtilsService implements OnInit, OnDestroy {
  
  experience: Experience = new Experience();
  index: number = 0;
  subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, 
    private resumeDetailsService: ResumeDetailsService,
    private router: Router, 
    private commonVariablesService : CommonVariablesService) {
      super();
    }

  getIndexFromId(id: number) {
    return id - 1;
  }

  setExperienceFromId(id: number) {
    const index = this.getIndexFromId(id);
    if (this.resumeDetailsService.resume.experiences && this.resumeDetailsService.resume.experiences[index]) {
      this.experience = this.resumeDetailsService.resume.experiences[index];
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.index = this.getIndexFromId(id);
    this.setExperienceFromId(id);
    this.route.params.subscribe((params: Params) =>  {
      console.log(params['id'], params['id']);
      this.index = this.getIndexFromId(+params['id']);
      this.setExperienceFromId(+params['id']);
    });

    this.subscriptions.add(this.commonVariablesService.modalPopupButtonValue.subscribe(buttonValue => {
      if (buttonValue === this.commonVariablesService.CANCEL_EDIT_EXPERIENCE) {
        console.log("confusing1");
        this.commonVariablesService.emitHidePopupModal(true);
      } else if (buttonValue == this.commonVariablesService.CONTINUE_EMPTY_EDIT_EXPERIENCE) {
        console.log("confusing2");
        this.commonVariablesService.emitHidePopupModal(true);
        this.remmoveEmptyExperience();
        // this.commonVariablesService.emitHidePopupModal(true);
      }
    })
  )

  }

  removeItem(experience: Experience, index: number) {
    if (index >= 0 && index < experience.responsibilities.length) {
      this.experience.responsibilities.splice(index, 1);
    }
  }

  addItem(experience: Experience) {
    this.experience.responsibilities.push(new Item());
  }

  showPopupModal() {
    const popModal = new PopupModal();
    popModal.text = "You have not entered any content. Do you still want continue?";
    popModal.button = [{buttonText: this.commonVariablesService.CANCEL, buttonValue: this.commonVariablesService.CANCEL_EDIT_EXPERIENCE}, 
                      {buttonText: "Continue", buttonValue: this.commonVariablesService.CONTINUE_EMPTY_EDIT_EXPERIENCE}];
    this.commonVariablesService.emitPopupModal(popModal);
  }

  addExperience() {
    if (!this.isObjectNotEmpty(this.experience)) {
      this.showPopupModal();
    } else { 
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  remmoveEmptyExperience() {
    if (!this.isObjectNotEmpty(this.experience) && this.resumeDetailsService.resume.experiences) {
      if (this.index >= 0 && this.index < this.resumeDetailsService.resume.experiences?.length) {
        this.resumeDetailsService.resume.experiences.splice(this.index, 1);
      }
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  // addExperience() {
  //   // console.log(!this.isObjectNotEmpty(this.experience) && this.resumeDetailsService.resume.experiences, "ins");
  //   if (!this.isObjectNotEmpty(this.experience) && this.resumeDetailsService.resume.experiences) {
  //     console.log(this.index >= 0 && this.index < this.resumeDetailsService.resume.experiences?.length, "ins1");
  //     console.log(this.resumeDetailsService.resume.experiences?.length, "ins2")
  //     if (this.index >= 0 && this.index < this.resumeDetailsService.resume.experiences?.length) {
  //       console.log("insideeeeee");
  //       this.resumeDetailsService.resume.experiences.splice(this.index, 1);
  //       this.showPopupModal();
  //     }
  //   }
  //   // this.router.navigate(['../'], {relativeTo: this.route});
  // }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }



}
