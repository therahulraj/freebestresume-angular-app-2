import { LinkText } from "./link-text.model";

export class Personal {
    firstName?: string;
    lastName?: string;
    otherFields: LinkText[] = [];


    email?: string;
    city?: string;
    country?: string;
    pincode?: string;
    phoneNumber?: string;
    passport?: string;  
    drivingLicence?: string;
    dateOfBirth?: string;
    nationality?: string;
    gender?: string;
    visaStatus?: string;
    religion?: string;
    maritalStatus?: string;
    website?: string;
    linkedIn?: string;
    github?: string;
    firstOtherWebsiteName?: string;
    firstOtherWebsiteLink?: string;
    secOtherWebsiteName?: string;
    secOtherWebsiteLink?: string;
    other?: string;

}