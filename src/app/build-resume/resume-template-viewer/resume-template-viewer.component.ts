import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Resume } from '../model/resume.model';
import { Personal } from '../model/personal.model';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { Experience } from '../model/experience.model';
import { Education } from '../model/education.model';
import { Skills } from '../model/skills.model';
import { SkillsGroup } from '../model/skills-group.model';
import { Project } from '../model/project.model';
import { TitleText } from '../model/title-text.model';
import { Link } from '../model/link.model';
import { TitleLink } from '../model/title-link.model';
import { DemoContact } from '../model/demo-contact.model';
import { JsonPipe } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';



@Component({
  selector: 'app-resume-template-viewer',
  templateUrl: './resume-template-viewer.component.html',
  imports: [ResumeTemplateComponent, NgxPrintModule],
  styleUrls: ['./resume-template-viewer.component.css']
})
export class ResumeTemplateViewerComponent implements OnInit {

  demoContact: DemoContact = new DemoContact();
//   resumeJson: string = `{
//     "personal": {
//         "firstName": "Rahul",
//         "lastName": "Raj",
//         "otherFields": [
//             {
//                 "isLink": true,
//                 "link": {
//                     "title": "email",
//                     "link": {
//                         "linkUrl": "rahulraj16mar@gmail.com",
//                         "linkText": "Email"
//                     }
//                 }
//             },
//             {
//                 "isLink": false,
//                 "text": {
//                     "title": "phoneNumber",
//                     "text": "+91 7484898911"
//                 }
//             }
//         ]
//     }
// }`;
//   contactJson: string = `{
//     "linkTexts": [
//         {
//             "isLink": true,
//             "link": {
//                 "title": "email",
//                 "link": {
//                     "linkUrl": "rahulraj16mar@gmail.com",
//                     "linkText": "Email"
//                 }
//             }
//         },
//         {
//             "isLink": false,
//             "text": {
//                 "title": "phoneNumber",
//                 "text": "+91 7484898911"
//             }
//         }
//     ]
// }`;

  resume: Resume = new Resume();
  personal: Personal = new Personal();
  experiences: Experience[] = [];
  experience1: Experience = new Experience();
  // @ViewChild('iframe', {static: false}) iframe!: ElementRef;
  experience2: Experience = new Experience();
  education1: Education = new Education();
  project1: Project = new Project();
  project2: Project = new Project();
  

  educations: Education[] = [];
  skills: Skills = new Skills();
  skillsGroup1: SkillsGroup = new SkillsGroup();
  skillsGroup2: SkillsGroup = new SkillsGroup();
  // titleValue1: TitleValue = new TitleValue();
  link1: Link = new Link();
  
  titleLink1: TitleLink = new TitleLink();
  link2: Link = new Link();
  
  titleLink2: TitleLink = new TitleLink();
  

  firstInput = 5;
  doc: any;
  compRef!: ComponentRef<ResumeTemplateComponent>;

  // onLoad(iframe: { contentDocument: any; contentWindow: any; }){
  //   this.doc = iframe.contentDocument || iframe.contentWindow;
  //   this.createComponent();
  // }

  // createComponent() {
  //   const compFactory = this.resolver.resolveComponentFactory(ResumeTemplateComponent);
  //   this.compRef = this.vcRef.createComponent(compFactory);
  //   this.compRef.location.nativeElement.id = 'innerComp';
  //   (<ResumeTemplateComponent>this.compRef.instance).resume = this.resume;
  //   // (<ResumeTemplateComponent>this.compRef.instance).emitOutput.subscribe(response => {
  //   // console.log(response);
  //   // });
  //   this.doc.body.appendChild(this.compRef.location.nativeElement);
  // }

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    
      this.personal.firstName = "Rahul";
      this.personal.lastName = "Raj";
      this.personal.email = "rahulraj16mar@gmail.com";
      this.personal.phoneNumber = "+91 7484898911";
      this.personal.linkedIn = "www.linkedin.com/in/the-rahulraj";
      this.personal.github = "https://github.com/therahulraj";
      this.personal.city = "Gumla";
      this.personal.country = "India";


      // this.experience1.employer = "Tata Consultancy Services";
      // this.experience1.jobTitle = "Java Developer";
      // this.experience1.location = "Kolkata";
      // this.experience1.startDate = "21/02/2021";
      // this.experience1.endDate = "27/05/2024";
      // this.experience1.details = ["Developed and maintained web applications using React, Node.js, and PostgreSsergedgdfgsdfgdsfgsdfgsdfgsdfgsdfgsdfQL.", 
      //                           "Collaborated with designers and backend developers to implement user-friendly interfaces.", 
      //                           "Optimized application performance, reducing load time by 40%.", 
      //                           "Optimized application performance, reducing load time by 40%."];
    
      // this.experience2.employer = "PwC India";
      // this.experience2.jobTitle = "Java Developer";
      // this.experience2.location = "Mumbai";
      // this.experience2.startDate = "21/02/2021";
      // this.experience2.endDate = "27/05/2024";
      // this.experience2.details = ["Developed and maintained web applications using React, Node.js, and PostgreSsergedgdfgsdfgdsfgsdfgsdfgsdfgsdfgsdfQL.", 
      //                           "Collaborated with designers and backend developers to implement user-friendly interfaces.", 
      //                           "Optimized application performance, reducing load time by 40%.", 
      //                           "Optimized application performance, reducing load time by 40%."];

      this.education1.instName = "Oriental Institute of Science and Technology";
      this.education1.instLocation = "Bhopal, MP";
      this.education1.degreeName = "Bachelor of Engineering";
      this.education1.fieldOfStudy = "Electronics and Communication Engineering";
      this.education1.startDate = "2016";
      this.education1.endDate = "2020";
      this.education1.grade = "7.6 CGPA";
      this.education1.coursesTitle = "Relevant courses";
      this.education1.courses = ["course1", "course2", "course3"]

      

      this.experiences = [this.experience1, this.experience2];
      this.educations = [this.education1];
    
      this.resume.experiences = this.experiences;
      this.resume.personal = this.personal;
      this.resume.educations = this.educations;
      
      this.skills.generalGroup = ["Java", "MySQL", "Angular", "SpringBoot"];
      this.skills.generalView = true;
      this.resume.skills = this.skills;

      this.skills.generalView = false;
      this.skillsGroup1.groupName = 'Language';
      this.skillsGroup1.skills = ["python", "java"];
      this.skillsGroup2.groupName = 'Tools';
      this.skillsGroup2.skills = ["jira"];
      this.skills.skillsGroup = [this.skillsGroup1, this.skillsGroup2];

      // this.titleValue1.title = 'Github';
      // this.titleValue1.value = 'https://github.com/janesmith/task-platform';
      this.project1.title = 'Task Management Platform';
      this.project1.startDate = 'May 2021';
      this.project1.endDate = 'Aug 2021';
      // this.link1.link = 'https://github.com/therahulraj/url-shortener';
      
      this.titleLink1.title = 'Github';
      this.link1.linkUrl = 'https://github.com/therahulraj/url-shortener';
      this.titleLink1.link = this.link1;
      
      this.titleLink2.title = 'Bitbucket';
      this.link2.linkUrl = 'https://github.com/therahulraj/url-shortener';
      this.link2.linkText = 'link2 text';
      this.titleLink2.link = this.link2;

      this.project1.projectLinks = [this.titleLink1, this.titleLink2];

      this.project1.details = ["kuchh bhi1", "kuchh bhi2", "kuchh bhi3"];
      this.project1.skillsUsed = ["java", "python", "cucumber"];

      this.resume.projects = [this.project1];


   }

   htmlContents(event: Event) {
    console.log("asdf", event);
   }

  //  onSave() {
  //   const printDoc = document.querySelector('.print-section') as HTMLElement;
  //   const doc = new jsPDF();
  //   doc.html(printDoc, {
  //     callback: (doc: jsPDF) => {
  //       doc.save('new-pdf');
  //     },
  //   })
  //  }
  ngOnInit(): void {

    // Object.assign(this.demoContact, JSON.parse(this.contactJson));
    // console.log(this.demoContact);
    // Object.assign(this.resume, JSON.parse(this.resumeJson));
    // console.log(this.resume);
    // console.log(this.demoContact.);
    
  }

  // printMe() {
  //   const customPrintOptions: PrintOptions = new PrintOptions({
  //       printSectionId: 'print-section',
  //       // Add any other print options as needed
  //   });
  //   this.printService.print(customPrintOptions);
    
  // }

}
