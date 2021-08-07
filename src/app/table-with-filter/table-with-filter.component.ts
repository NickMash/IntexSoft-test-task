import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-with-filter',
  templateUrl: './table-with-filter.component.html',
  styleUrls: ['./table-with-filter.component.scss']
})
export class TableWithFilterComponent implements OnInit {

  public filter: any = {search: '', searchColumn: ''};
  public currentRecords: any = [];
  public page: any = [];

  @Input() filterFields: any;
  @Input() columns: any;
  @Input() records: any;
  @Input() pageSize: any;

  constructor() { }

  ngOnInit(): void {

  }

}
