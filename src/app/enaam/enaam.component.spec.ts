import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnaamComponent } from './enaam.component';

describe('EnaamComponent', () => {
  let component: EnaamComponent;
  let fixture: ComponentFixture<EnaamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnaamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
