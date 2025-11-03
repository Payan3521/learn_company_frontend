import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignShowcase } from './design-showcase';

describe('DesignShowcase', () => {
  let component: DesignShowcase;
  let fixture: ComponentFixture<DesignShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
