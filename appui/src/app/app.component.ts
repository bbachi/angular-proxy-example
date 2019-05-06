import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appConfigService: AppConfigService) {}
  settings: any;

  ngOnInit() {
      this.settings = this.appConfigService.settings;
  }
}
