import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirutinaComponent } from './mirutina.component';

describe('MirutinaComponent', () => {
  let component: MirutinaComponent;
  let fixture: ComponentFixture<MirutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
