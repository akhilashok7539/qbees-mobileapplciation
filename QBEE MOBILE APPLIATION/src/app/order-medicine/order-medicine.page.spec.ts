import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderMedicinePage } from './order-medicine.page';

describe('OrderMedicinePage', () => {
  let component: OrderMedicinePage;
  let fixture: ComponentFixture<OrderMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
