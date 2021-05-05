import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('http://jsonplaceholder.typicode.com/todos');
  }
}
