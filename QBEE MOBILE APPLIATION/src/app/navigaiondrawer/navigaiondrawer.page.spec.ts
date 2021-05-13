import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigaiondrawerPage } from './navigaiondrawer.page';

describe('NavigaiondrawerPage', () => {
  let component: NavigaiondrawerPage;
  let fixture: ComponentFixture<NavigaiondrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigaiondrawerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigaiondrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
