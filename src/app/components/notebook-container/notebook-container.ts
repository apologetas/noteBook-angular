import {Component, OnInit} from '@angular/core';
import {NotebookAddForm} from '../notebookAddForm/notebookAddForm';
import {NotebookCardComponent} from '../notebook-card-component/notebook-card-component';
import {Notebook} from '../../models/notebook.model';
import {NotebookService} from '../../services/notebookService/notebook-service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-notebook-container',
  imports: [NotebookAddForm, NotebookCardComponent, ToastModule],
  providers: [MessageService],
  templateUrl: './notebook-container.html'
})
export class NotebookContainer  {

  notebooks: Notebook[] = [];

  constructor(
    private notebookService: NotebookService,
    private messageService: MessageService
  ) {
    this.loadNotebooks()
  }


  loadNotebooks() {
    this.notebookService.getAllNotebooks().subscribe(notebooks => {
      this.notebooks = notebooks;
    });
  }

  onNotebookAdded() {
    this.loadNotebooks();
    this.messageService.add({
      severity: 'success',
      summary: 'Pridėtas',
      detail: 'Užrašas pridėtas sėkmingai!',
    })
  }

  onNotebookDeleted(id: number) {
    this.notebookService.deleteNotebook(id);
    this.loadNotebooks();
    this.messageService.add({
      severity: 'success',
      summary: 'Ištrintas',
      detail: 'Užrašas ištrintas sėkmingai!',

    });
  }
}
