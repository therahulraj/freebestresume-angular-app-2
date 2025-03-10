import { Injectable } from "@angular/core";
import { Resume } from "../model/resume.model";

@Injectable({providedIn: 'root'})
export class ResumeDetailsService {
    resumeJson: string = `{
    "personal": {
        "firstName": "Rahul",
        "lastName": "Raj",
        "otherFields": [
            {
                "isLink": true,
                "link": {
                    "title": "email",
                    "link": {
                        "linkText": "",
                        "linkUrl": "rahulraj16mar@gmail.com"
                    }
                }
            },
            {
                "isLink": false,
                "text": {
                    "title": "phone Number",
                    "text": "+91 7484898911"
                }
            },
            {
                "isLink": true,
                "link": {
                    "title": "LinkedIn",
                    "link": {
                        "linkText": "",
                        "linkUrl": "https://www.linkedin.com/in/the-rahulraj/"
                    }
                }
            },
            {
                "isLink": true,
                "link": {
                    "title": "Github",
                    "link": {
                        "linkText": "",
                        "linkUrl": "https://github.com/therahulraj"
                    }
                }
            },
            {
                "isLink": false,
                "text": {
                    "title": "phone Number",
                    "text": "Gumla, India"
                }
            }
        ]
    }, 
        "experiences": [
                {
                    "jobTitle": "Java Developer",
                    "employer": "Tata Consultancy Services",
                    "location": "Kolkata, India",
                    "startDate": "21/02/2021",
                    "endDate": "27/05/2024",
                    "responsibilities": [
                        {
                            "item": "laskjdf"
                        },
                        {
                            "item": "asfasdf"
                        }
                    ]
                }

        ], "skills": {
            "generalView": true,
            "generalGroup": [
                {
                    "item": "java"
                },  
                {
                    "item": "python"
                }
            ]
        }
}`;

    resume: Resume = new Resume();

    constructor() {
        console.log(this.isNotEmpty(this.resume));
        Object.assign(this.resume, JSON.parse(this.resumeJson));
        console.log(this.isNotEmpty(this.resume));
        console.log(this.resume);
    }



    isNotEmpty(value: any): boolean {
        return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
      }


}