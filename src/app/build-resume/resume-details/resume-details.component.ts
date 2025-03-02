import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume-details',
  imports: [RouterOutlet],
  templateUrl: './resume-details.component.html',
  styleUrl: './resume-details.component.css'
})
export class ResumeDetailsComponent {

}
