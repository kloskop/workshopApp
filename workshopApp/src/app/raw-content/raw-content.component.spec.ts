import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawContentComponent } from './raw-content.component';

describe('RawContentComponent', () => {
  let component: RawContentComponent;
  let fixture: ComponentFixture<RawContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawContentComponent]
    });
    fixture = TestBed.createComponent(RawContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
