import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookContainer } from './notebook-container';

describe('NotebookContainer', () => {
  let component: NotebookContainer;
  let fixture: ComponentFixture<NotebookContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotebookContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
