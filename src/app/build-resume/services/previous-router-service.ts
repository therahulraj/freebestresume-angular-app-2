import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
  })
export class PreviousRouteService {
    private previousUrl: string | undefined;
    private currentUrl: string;
  
    constructor(private router: Router) {
      this.currentUrl = this.router.url;
      router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.urlAfterRedirects;
        });
    }
  
    getPreviousUrl() {
      return this.previousUrl;
    }
}