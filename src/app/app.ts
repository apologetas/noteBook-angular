import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotebookAddForm} from './components/notebookAddForm/notebookAddForm';
import {NotebookContainer} from './components/notebook-container/notebook-container';

@Component({
  selector: 'app-root',
  imports: [NotebookContainer],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('angular');
}
