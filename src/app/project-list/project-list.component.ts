import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
// // list of projects called by project-list.component.html
export class ProjectListComponent implements OnInit {
  projects: Project[] = [
    {id: 1, name: 'Learning C'},
    {id: 2, name: 'ASE Project'},
    {id: 3, name: 'My favorite language rust'}
  ];

  newProjectName: string = '';

  constructor() { }

  // lifecycle hook method
  // allows to inject code at certain lifecycle of app:
  // e.g. when sth loads or gets destroyed
  ngOnInit(): void {
  }

  createProject(): void {
    const project = new Project();
    project.name = this.newProjectName;
    project.id = this.projects[this.projects.length-1].id + 1
    this.projects.push(project);
    this.newProjectName = '';
    console.log('this will create a new project');
  }
}

