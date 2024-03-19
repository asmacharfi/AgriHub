import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompareComponent } from './compare-data.component';

describe('CompareDataComponent', () => {
  let component: CompareComponent;
  let fixture: ComponentFixture<CompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareComponent ]
      // Add any necessary providers or imports here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
