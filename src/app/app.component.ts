import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'freebestresume-angular-app-2';
}
