import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropzoneareaComponent } from './dropzonearea.component';

describe('DropzoneareaComponent', () => {
  let component: DropzoneareaComponent;
  let fixture: ComponentFixture<DropzoneareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropzoneareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropzoneareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
