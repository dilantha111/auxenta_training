import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OperatorServiceService {
  private url = 'http://localhost:8080/operator'
  private headers = new Headers({ 'Content-Type': 'application/json' })

  constructor(private http: Http) { }

  getOperators(): Promise<string[]> {
    return this.http.get(this.url)
      .toPromise().then(res => res.json())
      .catch(this.handleError)
  }

  addOperator(operator: string): Promise<any> {
    return this.http.post(this.url, JSON.stringify({ name: operator }), { headers: this.headers })
      .toPromise().then(res => res.json())
      .catch(this.handleError)
  }

  deleteOperator(operator: number): Promise<any> {
    return this.http.delete(this.url + '?id=' + operator, { headers: this.headers })
      .toPromise().then(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

}
