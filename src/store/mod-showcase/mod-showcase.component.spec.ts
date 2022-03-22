import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModShowcaseComponent } from './mod-showcase.component';

describe('ModShowcaseComponent', () => {
  let component: ModShowcaseComponent;
  let fixture: ComponentFixture<ModShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
