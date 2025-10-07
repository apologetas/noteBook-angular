import {Component, EventEmitter, Output} from '@angular/core';
import {NotebookService} from '../../services/notebookService/notebook-service';
import {FormsModule} from '@angular/forms';
import {Notebook} from '../../models/notebook.model';

@Component({
  selector: 'app-notebookAddForm',
  imports: [
    FormsModule
  ],
  templateUrl: './notebookAddForm.html',
})
export class NotebookAddForm {
  title = "";
  description = "";

  constructor(private notebookService:NotebookService) {
  }

  addNotebook() {
    if (this.title && this.description) {
      this.notebookService.addNoteBook(this.title, this.description);
      this.clearForm();
      this.notebookAdded.emit();

    }
  }

  private clearForm (){
    this.title = ""
    this.description = "";
  }
  @Output() notebookAdded = new EventEmitter<void>();

  public autoResize(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

}
