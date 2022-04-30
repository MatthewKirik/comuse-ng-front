import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramLoginButtonComponent } from './telegram-login-button.component';

describe('TelegramLoginButtonComponent', () => {
  let component: TelegramLoginButtonComponent;
  let fixture: ComponentFixture<TelegramLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelegramLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegramLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
