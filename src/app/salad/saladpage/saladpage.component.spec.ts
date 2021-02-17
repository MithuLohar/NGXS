import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladpageComponent } from './saladpage.component';

describe('SaladpageComponent', () => {
  let component: SaladpageComponent;
  let fixture: ComponentFixture<SaladpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
