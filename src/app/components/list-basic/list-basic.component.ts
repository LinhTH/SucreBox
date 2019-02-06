import { LoginInfo } from '../../core/models/login-info.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sucre-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent implements OnInit {
  @Input() folders: any[];
  @Input() notes: any[];
  @Input() loginInfos: LoginInfo[];

  constructor() {}

  ngOnInit() {}
}
