import { Item } from "./item.model";
import { SkillsGroup } from "./skills-group.model";

export class Skills {
    generalView?: boolean;
    groupView?: boolean;
    skillsGroup?: SkillsGroup[] = [];
    generalGroup?: Item[] = [];
}