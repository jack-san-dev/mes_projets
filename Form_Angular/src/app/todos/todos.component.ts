import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Todos';
  todos;
  constructor(private todosService: TodosService) { 
    this.todosService.getTodos().subscribe(data => {
      //console.log(data)
      this.todos = data;
    });
  }

  ngOnInit(): void {
  }

}
