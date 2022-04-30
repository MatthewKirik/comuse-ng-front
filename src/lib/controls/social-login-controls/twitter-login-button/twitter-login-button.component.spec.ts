import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLoginButtonComponent } from './twitter-login-button.component';

describe('TwitterLoginButtonComponent', () => {
  let component: TwitterLoginButtonComponent;
  let fixture: ComponentFixture<TwitterLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
