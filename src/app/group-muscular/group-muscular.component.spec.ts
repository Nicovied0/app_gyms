import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMuscularComponent } from './group-muscular.component';

describe('GroupMuscularComponent', () => {
  let component: GroupMuscularComponent;
  let fixture: ComponentFixture<GroupMuscularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupMuscularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMuscularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
