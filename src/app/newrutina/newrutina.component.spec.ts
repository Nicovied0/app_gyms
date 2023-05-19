import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrutinaComponent } from './newrutina.component';

describe('NewrutinaComponent', () => {
  let component: NewrutinaComponent;
  let fixture: ComponentFixture<NewrutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewrutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
