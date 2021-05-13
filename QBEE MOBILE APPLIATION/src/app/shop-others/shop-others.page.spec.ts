import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopOthersPage } from './shop-others.page';

describe('ShopOthersPage', () => {
  let component: ShopOthersPage;
  let fixture: ComponentFixture<ShopOthersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOthersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopOthersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
