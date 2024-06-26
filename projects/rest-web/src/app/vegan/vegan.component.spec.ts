import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganComponent } from './vegan.component';

describe('VeganComponent', () => {
  let component: VeganComponent;
  let fixture: ComponentFixture<VeganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeganComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
