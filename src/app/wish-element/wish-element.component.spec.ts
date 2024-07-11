import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishElementComponent } from './wish-element.component';

describe('WishElementComponent', () => {
  let component: WishElementComponent;
  let fixture: ComponentFixture<WishElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishElementComponent]
    });
    fixture = TestBed.createComponent(WishElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
