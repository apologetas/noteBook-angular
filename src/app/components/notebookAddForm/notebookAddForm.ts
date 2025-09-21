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

// notebookAddForm.component.ts
  addNotebook() {
    if (this.title && this.description) {
      console.log('➕ FORM: Adding notebook:', this.title, this.description);
      this.notebookService.addNoteBook(this.title, this.description);
      this.clearForm();
      console.log('📡 FORM: About to emit event...');
      this.notebookAdded.emit();
      console.log('✅ FORM: Event emitted!');
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
