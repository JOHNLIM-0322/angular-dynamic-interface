import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { NOPResponse, NOPResponse_AF } from './nop.interface';
import { NOPFunc } from './nop.model';

@Injectable({
  providedIn: 'root'
})
export class NopService {

  constructor(private http: HttpClient) { }

  auth_body = {
    "source": "",
    "sender": "natqa",
    "pwd":"natqa1",
    "locale": 1
  };

  nopLogon() : Observable <any>{
    //return this.http.post<any>('https://daeesmsilk2:8443/now_tomcat/NOPREST_Session/LG', this.auth_body);
    return this.http.post<any>('/api/NOPREST_Session/LG', this.auth_body);
  }

  getData() : Observable <NOPResponse>  {
    //return this.http.get<NOPResponse>('http://localhost:3000/response');
    return this.http.post<NOPResponse>('/api/NOPREST_LS_RM/RM', null);
  }

  getAFMenu(): Observable <NOPResponse_AF> {
    //let nopFuncList: NOPFunc[] = [];
    return this.http.get<NOPResponse_AF>('http://localhost:3001/response');
  }

  getAFMenuList(): Observable <NOPFunc[]> {
    let dataList: NOPFunc[] = [];
    return this.http.get<any[]>('http://localhost:3001/response').pipe(
      map(resp  => {
        if (resp.hasOwnProperty('NopResult')) {
          
          let obj = JSON.parse(JSON.stringify(resp));
          console.log(obj['NopResult']['functions']);

          for (const item of obj['NopResult']['functions']) {
            let data = new NOPFunc();
            data = {
              fundId: "",
              name: "-",
              helpID: 0,
              helpUrl: "",
              enabled: false
            };
            if ('fun' in item) {
              let fun = JSON.parse(JSON.stringify(item['fun']));
              console.log('funId  : ' + fun['funId']);
              console.log('name   : ' + fun['name']);
              console.log('helpID : ' + fun['helpID']);
              console.log('helpUrl: ' + fun['helpUrl']);
              console.log('enabled: ' + fun['enabled']);

              data = {
                fundId: fun['funId'],
                name: fun['name'],
                helpID: fun['helpID'],
                helpUrl: fun['helpUrl'],
                enabled: fun['enabled']
              };
            }
            dataList.push(data);
          }
          return dataList;
        } else {
          throw new Error('[NOPService] AF List not found');
        }
      }), catchError((err) => {
        return throwError(err);
      })
    );
  }
}
