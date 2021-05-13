import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtploginPage } from './otplogin.page';

describe('OtploginPage', () => {
  let component: OtploginPage;
  let fixture: ComponentFixture<OtploginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtploginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtploginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
