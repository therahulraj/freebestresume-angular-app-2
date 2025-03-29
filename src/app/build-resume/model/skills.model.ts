import { Item } from "./item.model";
import { SkillsGroup } from "./skills-group.model";

export class Skills {
    generalView: boolean = true;
    skillsGroup: SkillsGroup[] = [];
    generalGroup: Item[] = [];
}