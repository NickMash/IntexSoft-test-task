import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  public pages: any = [];

  @Input() currentRecords: any;
  @Input() pageSize: any;
  @Input() page: any;

  @Output() updatePage = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    this.setPages(this.currentRecords);
    this.updatePage.emit(this.pages[0]);
  }

  ngOnInit(): void {
  }

  setPages(currentRecords: any) {
    let count = 0;
    let currentIndex = this.pageSize;
    let arr: any = [];
    this.pages = [];
    currentRecords.forEach((item: any, index: any, array: any) => {
      if (index === (array.length - 1)) {
        this.pages[count] = arr;
      }
      if (index < currentIndex) {
        arr.push(item);
      } else {
        this.pages[count] = arr;
        arr = [];
        arr.push(item);
        count++;
        currentIndex += this.pageSize;
      }
    });
  }

  openPage(pagesMassiveIndex: any) {
    this.updatePage.emit(this.pages[pagesMassiveIndex]);
  }

}
