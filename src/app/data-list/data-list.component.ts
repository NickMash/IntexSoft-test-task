import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  public filterFields = [];
  public columns = [];
  public records = [];
  public pageSize = 5;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(result => {
      result.forEach((item: any) => {
        item['url'] = environment.youtubeUrl + item.videoId;
      });
      for (let key in result[0]) {
        // @ts-ignore
        this.filterFields.push(key);
        // @ts-ignore
        this.columns.push(key);
      }
      this.records = result;
    });
  }

}
