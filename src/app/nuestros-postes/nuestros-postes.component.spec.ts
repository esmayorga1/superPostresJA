import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosPostesComponent } from './nuestros-postes.component';

describe('NuestrosPostesComponent', () => {
  let component: NuestrosPostesComponent;
  let fixture: ComponentFixture<NuestrosPostesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrosPostesComponent]
    });
    fixture = TestBed.createComponent(NuestrosPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
