import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralshopDishesPage } from './generalshop-dishes.page';

describe('GeneralshopDishesPage', () => {
  let component: GeneralshopDishesPage;
  let fixture: ComponentFixture<GeneralshopDishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralshopDishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralshopDishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
