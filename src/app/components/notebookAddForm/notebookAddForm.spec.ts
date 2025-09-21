import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookAddForm } from './notebookAddForm';

describe('Notebook', () => {
  let component: NotebookAddForm;
  let fixture: ComponentFixture<NotebookAddForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotebookAddForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookAddForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
