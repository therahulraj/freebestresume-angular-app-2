import { Component, OnInit } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RouterOutlet } from '@angular/router';
import { ResumeDetailsService } from '../services/resume-details.service';
import { Skills } from '../model/skills.model';

@Component({
  selector: 'app-resume-details',
  imports: [RouterOutlet],
  templateUrl: './resume-details.component.html',
  styleUrl: './resume-details.component.css'
})
export class ResumeDetailsComponent {

}
