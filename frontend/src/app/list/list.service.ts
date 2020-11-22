import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {List} from "./list";
import {HandleError, HttpErrorHandler} from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer test'
  })
};

@Injectable()
export class ListService {
  listUrl = '//localhost:8080/api/list';  // URL to web api
  private readonly handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ListService');
  }

  /** GET list from the server */
  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
      .pipe(
        catchError(this.handleError('getList', []))
      );
  }
}
