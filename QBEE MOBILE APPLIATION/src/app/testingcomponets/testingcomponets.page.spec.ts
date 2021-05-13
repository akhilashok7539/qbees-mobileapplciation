import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingcomponetsPage } from './testingcomponets.page';

describe('TestingcomponetsPage', () => {
  let component: TestingcomponetsPage;
  let fixture: ComponentFixture<TestingcomponetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingcomponetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingcomponetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
