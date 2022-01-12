import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoPriveComponent } from './memo-prive.component';

describe('MemoPriveComponent', () => {
  let component: MemoPriveComponent;
  let fixture: ComponentFixture<MemoPriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoPriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
