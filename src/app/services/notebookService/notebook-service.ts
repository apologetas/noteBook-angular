
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notebook } from '../../models/notebook.model';
import { NotebookRepository } from '../../repository/notebook.repository';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  private notebookListSubject = new BehaviorSubject<Notebook[]>([]);
  public notebooks$ = this.notebookListSubject.asObservable();

  constructor(private repository: NotebookRepository) {
    this.loadNotebooks();
  }

  private loadNotebooks(): void {
    this.repository.getAll().subscribe({
      next: notebooks => {
        this.notebookListSubject.next(notebooks);
      },
      error: err => {
        console.error('❌NotebookService:  error loading notebooks:', err);
      }
    });
  }

  getAllNotebooks(): Observable<Notebook[]> {
    return this.notebooks$;
  }

  addNoteBook(title: string, description: string): void {
    const currentList = this.notebookListSubject.value;
    const newNotebook: Notebook = {
      id: this.getNextId(currentList),
      title: title,
      description: description
    };

    this.repository.add(newNotebook).subscribe({
      next: () => {
        const updatedList = [...currentList, newNotebook];
        this.notebookListSubject.next(updatedList);
      },
      error: err => {
        console.error('❌ NotebookService: Error adding notebook:', err);
      }
    });
  }

  deleteNotebook(id: number): void {
    this.repository.delete(id).subscribe({
      next: () => {
        const updatedList = this.notebookListSubject.value.filter(n => n.id !== id);
        this.notebookListSubject.next(updatedList);
      },
      error: err => {
        console.error('❌ NotebookService: Error deleting notebook:', err);
      }
    });
  }

  private getNextId(notebooks: Notebook[]): number {
    if (!notebooks || notebooks.length === 0) {
      return 1;
    }
    return Math.max(...notebooks.map(n => n.id)) + 1;
  }
}
