import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListtopdealsPage } from './listtopdeals.page';

describe('ListtopdealsPage', () => {
  let component: ListtopdealsPage;
  let fixture: ComponentFixture<ListtopdealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtopdealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListtopdealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
