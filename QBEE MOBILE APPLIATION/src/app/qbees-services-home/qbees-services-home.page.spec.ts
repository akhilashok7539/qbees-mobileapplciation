import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QbeesServicesHomePage } from './qbees-services-home.page';

describe('QbeesServicesHomePage', () => {
  let component: QbeesServicesHomePage;
  let fixture: ComponentFixture<QbeesServicesHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QbeesServicesHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QbeesServicesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
