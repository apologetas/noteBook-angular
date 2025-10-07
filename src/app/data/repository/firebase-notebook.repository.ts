// firebase-notebook.repository.ts
import {Injectable} from '@angular/core';
import {NotebookRepository} from '../../repository/notebook.repository';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of, switchMap} from 'rxjs';
import {Notebook} from '../../models/notebook.model';
import {environment} from '../../environments/environment';

@Injectable()
export class FirebaseNotebookRepository implements NotebookRepository {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Notebook[]> {

    return this.http.get<any>(`${environment.firebaseUrl}/notebooks.json`)
      .pipe(
        map(data => {
          console.log('🔥 data received:', data);
          const notebooks: Notebook[] = [];
          if (data) {
            Object.values(data).forEach((value: any) => {
              if (Array.isArray(value)) {
                value.forEach((n: any) => notebooks.push(n));
              } else if (value && typeof value === 'object') {
                notebooks.push(value);
              }
            });
          }

          return notebooks;
        })
      );
  }

  add(notebook: Notebook): Observable<void> {

    return this.http.post<void>(`${environment.firebaseUrl}/notebooks.json`, notebook);
  }

  delete(id: number): Observable<void> {

    return this.http.get<any>(`${environment.firebaseUrl}/notebooks.json`)
      .pipe(
        switchMap(data => {
          console.log('🔥 searching for id in data:', data);
          for (let key in data) {
            if (data[key].id === id) {

              return this.http.delete<void>(`${environment.firebaseUrl}/notebooks/${key}.json`);
            }
          }

          return of(undefined);
        })
      );
  }
}
