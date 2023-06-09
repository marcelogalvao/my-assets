import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YahooService {
  constructor(private http: HttpClient) {}

  public getPetra4(): Observable<any> {
    return this.http.get(environment.api.getPetra4);
  }
}
