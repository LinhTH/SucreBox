import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperIntegrationService<T> {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post(url: string, requestBody: any): Observable<T> {
    return this.http.post<T>(url, requestBody);
  }

  put(url: string, requestBody: string): Observable<T> {
    return this.http.put<T>(url, requestBody);
  }

  delete(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  patch(url: string, requestBody: string): Observable<T> {
    return this.http.patch<T>(url, requestBody);
  }
}
