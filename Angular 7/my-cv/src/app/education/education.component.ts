import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  college: string = 'The Ohio State University';
  gradYear: number = 2013;
  major: string = 'Accounting';
  minor: string = 'none';

 constructor(college: string, gradYear: number, major: string, minor: string) { }

  ngOnInit() {
  }

 displayMessage(college: string, gradYear: number, major: string, minor: string): string {
  if (minor !== 'none') {
return 'Graduated in ' + gradYear + 'from ' + college + '. Majored in ' + major + ' and Minored in' + minor;
} else {
    return 'Graduated in ' + gradYear + 'from ' + college + '. Majored in ' + major;
  }
}
}