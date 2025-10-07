
import {Observable} from 'rxjs';
import {Notebook} from '../models/notebook.model';

export abstract class NotebookRepository {
  abstract getAll(): Observable<Notebook[]>;
  abstract add(notebook: Notebook): Observable<void>;
  abstract delete(id: number): Observable<void>;
}
