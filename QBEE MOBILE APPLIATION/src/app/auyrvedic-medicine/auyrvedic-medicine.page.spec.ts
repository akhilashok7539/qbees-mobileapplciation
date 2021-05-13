import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuyrvedicMedicinePage } from './auyrvedic-medicine.page';

describe('AuyrvedicMedicinePage', () => {
  let component: AuyrvedicMedicinePage;
  let fixture: ComponentFixture<AuyrvedicMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuyrvedicMedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuyrvedicMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
