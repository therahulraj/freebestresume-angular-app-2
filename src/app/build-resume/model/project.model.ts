import { TitleLink } from "./title-link.model";
import { TitleText } from "./title-text.model";

export class Project {
    title?: string;
    details?: string[];
    startDate?: string;
    endDate?: string;
    skillsUsedTitle?: string;
    skillsUsed?: string[];
    projectLinks?: TitleLink[];
    // projectLink2?: TitleValue;
    // projectLink3?: TitleValue;
}