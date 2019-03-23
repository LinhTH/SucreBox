import { PasswordInfoBuilder } from './../../../core/models/password-info.model.builder';
import { PasswordInfo } from './../../../core/models/password-info.model';
import { Component, Input, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'sucre-password-overview-page',
  templateUrl: './password-overview-page.component.html',
  styleUrls: ['password-overview-page.component.css']
})
export class PasswordOverviewPageComponent implements OnInit {
  @Input() passwordInfos: PasswordInfo[];

  displayedColumns: string[] = ['Title', 'Username', 'Password'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.passwordInfos = [];

    const passwordInfo1 = new PasswordInfoBuilder()
      .withTitle('Title')
      .withEmailOrUsername('UserName')
      .withPassword('password')
      .withWebsite('website.com')
      .build();

    const passwordInfo2 = new PasswordInfoBuilder()
      .withTitle('NoTitle')
      .withEmailOrUsername('thlinh')
      .withWebsite('Idontknow.com')
      .withPassword('abcd')
      .build();

    this.passwordInfos.push(passwordInfo1);
    this.passwordInfos.push(passwordInfo2);
  }
}
