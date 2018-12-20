import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkatersService {
  constructor(public http: HttpClient) { }

  /* httpOptions = {
    headers: new HttpHeaders({
      /* 'x-api-key': ''
    })
  };
*/

/*   getTeams(): Observable<any> {
    return this.http.get(
      `https://statsapi.web.nhl.com/api/v1/teams`
    , )
  } */

  getRosters(): Observable<any> {
    return this.http.get(
      `https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster`
    )
  }

}


