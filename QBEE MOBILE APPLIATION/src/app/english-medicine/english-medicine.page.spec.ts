import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnglishMedicinePage } from './english-medicine.page';

describe('EnglishMedicinePage', () => {
  let component: EnglishMedicinePage;
  let fixture: ComponentFixture<EnglishMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishMedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
