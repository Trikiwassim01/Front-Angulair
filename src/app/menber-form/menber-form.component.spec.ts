import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenberFormComponent } from './menber-form.component';

describe('MenberFormComponent', () => {
  let component: MenberFormComponent;
  let fixture: ComponentFixture<MenberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenberFormComponent]
    });
    fixture = TestBed.createComponent(MenberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
