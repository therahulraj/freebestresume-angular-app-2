import { AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Personal } from '../../model/personal.model';
import { LinkText } from '../../model/link-text.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, ROUTER_OUTLET_DATA } from '@angular/router';
import { CommonVariablesService } from '../../services/common-variables.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit, AfterViewInit {

  resumePersonalDetails: Personal = new Personal();
  emptyString: string = "";
  firstName: string = "";
  linkText: Array<boolean> = [];
  templateModalView: boolean = false;

  constructor(private resumeDetailsService: ResumeDetailsService, 
    private router: Router, 
    private route: ActivatedRoute,
    private commonVariablesService: CommonVariablesService,
    @Inject(ROUTER_OUTLET_DATA) private routeData: any) { }


  ngAfterViewInit(): void {
    this.commonVariablesService.templateModalView.subscribe(templateModalView => {
        console.log(templateModalView, "viewwwwwwwwwwwwwwwwwwwww");
        this.templateModalView = templateModalView;
      }
    );
  }
  
    // personalDetailsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.resumeDetailsService.resume?.personal) {
      this.resumePersonalDetails = this.resumeDetailsService.resume?.personal;
      console.log(this.resumePersonalDetails, "personal details");
    }
    console.log("personal");
    console.log(this.routeData.templateModalView, "routeDataaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    // this.personalDetailsForm = new FormGroup({
    //   'firstName': new FormControl(this.resumePersonalDetails?.firstName),
    //   'lastName': new FormControl(this.resumePersonalDetails?.lastName),
    //   'otherFields': new FormArray([])
    // })

  }

  

  isNullOrUndefined(value: any): boolean {
    return value == null;
  }

  goToNextSection() {
    this.router.navigate(['../experience-details'], {relativeTo: this.route})
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

  @HostListener('window:scroll', ['$event'])
  onResize(event: Event) {
    console.log(event)

  }
  


}

