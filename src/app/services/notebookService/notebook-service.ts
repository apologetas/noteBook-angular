import { Injectable } from '@angular/core';
import {Notebook} from '../../models/notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  private notebookList: Notebook[]= [];

  getAllNotebooks(): Notebook [] {
   return  this.notebookList;
  }

  constructor() {
    this.notebookList =  this.fetchFromLocalStorage();
  }

  addNoteBook(title:string, description:string): Notebook{
    const newNotebook: Notebook = {
      id: this.getNextId(),
      title :title,
      description :description
    }

    this.notebookList.push(newNotebook);
    this.saveToLocalStorage()


    return newNotebook;

  }
  deleteNotebook(id: number): void {
    this.notebookList = this.notebookList.filter(n => n.id !== id);
    this.saveToLocalStorage()
  }


  private saveToLocalStorage(): void{
    localStorage.setItem('notebooks', JSON.stringify(this.notebookList));
  }

  private getNextId (): number{
    if(this.notebookList.length ==0){
      return 1;
    }
    return Math.max(...this.notebookList.map(n => n.id)) + 1

  }

  private fetchFromLocalStorage(): Notebook [] {
    const noteBooks = localStorage.getItem('notebooks');
    if (noteBooks != null) {
     return  this.notebookList = JSON.parse(noteBooks);
    } else {
      return  this.notebookList = [];
    }
  }

}
