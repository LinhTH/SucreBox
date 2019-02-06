import { LoginInfoBuilder } from '../../core/models/login-info.model.builder';
import { LoginInfo } from '../../core/models/login-info.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'sucre-password-overview-page',
  templateUrl: './password-overview-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./password-overview-page.component.css']
})
export class PasswordOverviewPageComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

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
