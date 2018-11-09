import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotWrapperComponent } from './chatbot-wrapper.component';

describe('ChatbotWrapperComponent', () => {
  let component: ChatbotWrapperComponent;
  let fixture: ComponentFixture<ChatbotWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
