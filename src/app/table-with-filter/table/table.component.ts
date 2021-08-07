import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  public recordsArray = [];

  @Input() columns: any;
  @Input() records: any;
  @Input() filter: any;
  @Input() page: any;

  @Output() updateRecords = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.searchRecords(this.filter);
  }

  searchRecords(filter: any) {
    if (this.filter.search && filter.searchColumn) {
      const array: any = [];
      this.records.forEach((item: any) => {
        if (item[filter.searchColumn].toLowerCase().includes(filter.search)) {
          array.push(item);
        }
      });
      this.recordsArray = array;
      this.updateRecords.emit(array);
    } else {
      this.recordsArray = this.records;
      this.updateRecords.emit(this.records);
    }
  }

  directSort(columnName: any) {
    let array = [];
    array = this.recordsArray.sort((a: any, b: any) => {
      let nameA = a[columnName].toLowerCase(), nameB = b[columnName].toLowerCase();
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
    this.updateRecords.emit(array);
  }

  reverseSort(columnName: any) {
    let array = [];
    array = this.recordsArray.sort((a: any, b: any) => {
      let nameA = a[columnName].toLowerCase(), nameB = b[columnName].toLowerCase();
      if (nameA < nameB)
        return 1
      if (nameA > nameB)
        return -1
      return 0
    })
    this.updateRecords.emit(array);
  }

  isImage(value: string) {
    value = value.toLowerCase();
    return (value.includes('http') && (value.includes('jpg') || value.includes('jpeg') || value.includes('png')));
  }

  isLink(value: string) {
    value = value.toLowerCase();
    return (value.includes('http') &&
      !(value.includes('jpg') || value.includes('jpeg') || value.includes('png')) &&
      !value.split('http')[0]);
  }

}
