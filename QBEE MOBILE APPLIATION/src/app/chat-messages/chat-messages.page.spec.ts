import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatMessagesPage } from './chat-messages.page';

describe('ChatMessagesPage', () => {
  let component: ChatMessagesPage;
  let fixture: ComponentFixture<ChatMessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
