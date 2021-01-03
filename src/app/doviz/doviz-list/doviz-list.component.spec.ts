import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DovizListComponent } from './doviz-list.component';

describe('DovizListComponent', () => {
  let component: DovizListComponent;
  let fixture: ComponentFixture<DovizListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DovizListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DovizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
