import { Item } from "./item.model";

export class Experience {
    jobTitle?: string;
    employer?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    responsibilities: Item[] = [];
}