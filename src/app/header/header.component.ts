import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isAdmin = true;
class1 = "navbar navbar-expand-lg navbar-light bg-light";
class2 = "navbar navbar-expand-lg navbar-dark bg-dark";
}
