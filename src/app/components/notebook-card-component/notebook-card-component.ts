import {Component, EventEmitter, Input, Output} from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';



@Component({
  selector: 'app-notebook-card-component',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './notebook-card-component.html'
})
export class NotebookCardComponent {

  readonly DeletedIcon = Trash2
  @Input() title = '';
  @Input() description = '';
  @Input() id!: number;
  @Output() onDelete = new EventEmitter<number>();

  deleteNotebook() {
    this.onDelete.emit(this.id);
  }


}
