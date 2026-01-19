import { Component, input } from '@angular/core';
import { Project } from '../../pages/projects/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
