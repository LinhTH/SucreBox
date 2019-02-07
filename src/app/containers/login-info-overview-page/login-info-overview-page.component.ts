import { LoginInfoBuilder } from '../../core/models/login-info.model.builder';
import { LoginInfo } from '../../core/models/login-info.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'sucre-login-info-overview-page',
  templateUrl: './login-info-overview-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login-info-overview-page.component.css']
})
export class LoginInfoOverviewPageComponent implements OnInit {
  loginInfos: LoginInfo[] = [];

  constructor() {}

  ngOnInit() {
    const loginInfo1 = new LoginInfoBuilder()
      .withTitle('Title')
      .withEmailOrUsername('UserName')
      .withPassword('password')
      .withWebsite('website.com')
      .build();

    const loginInfo2 = new LoginInfoBuilder()
      .withTitle('NoTitle')
      .withEmailOrUsername('thlinh')
      .withWebsite('Idontknow.com')
      .withPassword('abcd')
      .build();

    this.loginInfos.push(loginInfo1);
    this.loginInfos.push(loginInfo2);
  }
}
