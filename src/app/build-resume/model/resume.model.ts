import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Personal } from "./personal.model";
import { Project } from "./project.model";
import { Skills } from "./skills.model";
import { Summary } from "./summary.model";

export class Resume {
    personal?: Personal;
    educationSecTitle?: string;
    educations?: Education[];
    experienceSecTitle?: string;
    experiences?: Experience[];
    skillsSecTitle?: string;
    skills?: Skills;
    projectSecTitle?: string;
    projects?: Project[];
    summarySecTitle?: string;
    summary?: Summary;

}