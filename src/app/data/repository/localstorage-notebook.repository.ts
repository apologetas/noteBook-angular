// localstorage-notebook-repository.ts
import {Injectable} from '@angular/core';
import {NotebookRepository} from '../../repository/notebook.repository';
import {Observable, of} from 'rxjs';
import {Notebook} from '../../models/notebook.model';

@Injectable()
export class LocalStorageNotebookRepository implements NotebookRepository {
  getAll(): Observable<Notebook[]> {
    const data = localStorage.getItem('notebooks');
    return of(data ? JSON.parse(data) : []);
  }

  add(notebook: Notebook): Observable<void> {
    const notebooks = JSON.parse(localStorage.getItem('notebooks') || '[]');
    notebooks.push(notebook);
    localStorage.setItem('notebooks', JSON.stringify(notebooks));
    return of(undefined);
  }

  delete(id: number): Observable<void> {
    let notebooks = JSON.parse(localStorage.getItem('notebooks') || '[]');
    notebooks = notebooks.filter((n: Notebook) => n.id !== id);
    localStorage.setItem('notebooks', JSON.stringify(notebooks));
    return of(undefined);
  }
}
