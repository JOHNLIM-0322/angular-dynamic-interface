import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NOPResponse } from './nop.interface';

@Injectable({
  providedIn: 'root'
})
export class NopService {

  constructor(private http: HttpClient) { }

  getData() : Observable <NOPResponse>  {
    return this.http.get<NOPResponse>('http://localhost:3000/response');
  }
}
