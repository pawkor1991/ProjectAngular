import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZagraniczneComponent } from './zagraniczne.component';

describe('ZagraniczneComponent', () => {
  let component: ZagraniczneComponent;
  let fixture: ComponentFixture<ZagraniczneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZagraniczneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZagraniczneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
