import { Link } from "./link.model";
import { TitleLink } from "./title-link.model";
import { TitleText } from "./title-text.model";

export class LinkText {
    isLink: boolean = false;
    link = new TitleLink();
    text = new TitleText();
}