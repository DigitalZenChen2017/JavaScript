import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
      color: darkblue;
    }
`]
  })
export class AppComponent {
  firstName = 'Boris';
  lastName = 'Chen';
  name = 'Boris Chen';
  phoneNumber = 5132909828;
  email = 'theboris.chen@gmail.com';
}
