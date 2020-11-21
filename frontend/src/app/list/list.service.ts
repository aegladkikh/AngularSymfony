import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {List} from "./list";
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer test'
  })
};

@Injectable()
export class ListService {
  listUrl = '//localhost:8080/api/list';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ListService');
  }

  /** GET list from the server */
  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
      .pipe(
        tap(_ => console.debug('123')),
        catchError(this.handleError('getList', []))
      );
  }
}
