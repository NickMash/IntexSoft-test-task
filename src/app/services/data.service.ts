import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Helper from '../helpers/prepare-row-data';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable <any> {
    const url = `${environment.URL}data`;

    return this.http.get(url).pipe(
        map((response: any) => Helper.prepareRowData(response)),
        catchError((error): any => {
          throw error;
        }));
  }

}
