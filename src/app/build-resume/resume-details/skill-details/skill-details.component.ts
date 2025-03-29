import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Skills } from '../../model/skills.model';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { Item } from '../../model/item.model';
import { ObjectUtilsService } from '../../services/object-utils.service';
import { SkillsGroup } from '../../model/skills-group.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-skill-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.css'
})
export class SkillDetailsComponent extends ObjectUtilsService implements OnInit, DoCheck {
  // experiences: Experience[] = [];

  skills: Skills = new Skills();
  showDummy: boolean = true;
  sectionTouched: boolean = false;
  groupView: boolean = false;

  constructor(private resumeDetailsService: ResumeDetailsService,
    private router: Router, 
    private route: ActivatedRoute) {
    super();
  }

  setupEmptyDummySkills() {
    this.skills = new Skills();
    this.skills.generalGroup.push(new Item());
    this.skills.generalView = true;

    let skillsGroup = new SkillsGroup();
    skillsGroup.skills.push(new Item());
    this.skills.skillsGroup.push(skillsGroup);
  }
  
  ngOnInit(): void {
    if (this.showDummy) {
      this.setupEmptyDummySkills();
    } else {
      if(this.resumeDetailsService.resume?.skills) {
        this.skills = this.resumeDetailsService.resume.skills;
        
      }
    }
  }

  // ngAfterViewInit() {
  //   this.groupView = !this.skills.generalGroup;
  // }

  ngDoCheck(): void {
    if (this.showDummy && !this.sectionTouched && this.isObjectNotEmpty(this.skills)) {
      this.resumeDetailsService.resume.skills = this.skills;
      this.sectionTouched = true;
    }
  }

  viewChanged(event: Event) {
    console.log((<HTMLInputElement>event.currentTarget).checked, "veiwchangedddddddddddddddddd");
    const toggleState = (<HTMLInputElement>event.currentTarget).checked;
    this.skills.generalView = !toggleState;
  }

  addGeneralSkill() {
    this.skills.generalGroup?.push(new Item());
  }

  addSkillGroup() {
    const skillsGroup = new SkillsGroup();
    skillsGroup.skills.push(new Item());
    this.skills.skillsGroup.push(skillsGroup);
  }

  addSkillGroupItem(index: number) {
    if (this.skills.skillsGroup[index]) {
      const skillGroup = this.skills.skillsGroup[index];
      skillGroup.skills.push(new Item());
    }
  }

  removeSkillGroup(skillGroupIndex: number) {
    if (this.skills.skillsGroup[skillGroupIndex]) {
      if (skillGroupIndex >= 0 && skillGroupIndex < this.skills.skillsGroup.length) {
        this.skills.skillsGroup.splice(skillGroupIndex, 1);
      }
    }

  }

  removeSkillGroupItem(skillGroupIndex: number, itemIndex: number) {
    if (this.skills.skillsGroup[skillGroupIndex]) { 
      const skillGroup = this.skills.skillsGroup[skillGroupIndex];
      if (itemIndex >= 0 && itemIndex < skillGroup.skills.length) {
        skillGroup.skills.splice(itemIndex, 1);
      }
    }
  }

  removeGeneralGroupItem(index: number) {
    if (this.skills.generalGroup) {
      if (index >= 0 && index < this.skills.generalGroup.length) {
        this.skills.generalGroup.splice(index, 1);
      }
    }
  }

  goToNextSection() {
    this.router.navigate(['../education-details'], {relativeTo: this.route})
  }


}
