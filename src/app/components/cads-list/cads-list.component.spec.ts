import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsListComponent } from './cads-list.component';

describe('CadsListComponent', () => {
  let component: CadsListComponent;
  let fixture: ComponentFixture<CadsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadsListComponent]
    });
    fixture = TestBed.createComponent(CadsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
