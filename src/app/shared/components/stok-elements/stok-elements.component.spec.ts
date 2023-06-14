import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokElementsComponent } from './stok-elements.component';

describe('StokElementsComponent', () => {
  let component: StokElementsComponent;
  let fixture: ComponentFixture<StokElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
