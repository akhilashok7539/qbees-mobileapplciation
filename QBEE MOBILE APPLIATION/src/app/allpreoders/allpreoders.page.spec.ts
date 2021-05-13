import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllpreodersPage } from './allpreoders.page';

describe('AllpreodersPage', () => {
  let component: AllpreodersPage;
  let fixture: ComponentFixture<AllpreodersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpreodersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllpreodersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
