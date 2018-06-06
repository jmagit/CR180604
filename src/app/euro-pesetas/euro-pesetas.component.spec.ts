import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroPesetasComponent } from './euro-pesetas.component';

describe('EuroPesetasComponent', () => {
  let component: EuroPesetasComponent;
  let fixture: ComponentFixture<EuroPesetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroPesetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroPesetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
