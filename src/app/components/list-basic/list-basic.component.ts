import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent implements OnInit {

  @Input() folders: any[];
  @Input() notes: any[];

  constructor() { }

  ngOnInit() {
  }

  get folders2(): any[] {

    console.log('TEST');

    return this.folders;
  }
}
