import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirective } from './add-directive';

describe('AddDirective', () => {
  let component: AddDirective;
  let fixture: ComponentFixture<AddDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
