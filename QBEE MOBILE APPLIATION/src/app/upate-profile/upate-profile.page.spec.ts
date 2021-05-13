import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpateProfilePage } from './upate-profile.page';

describe('UpateProfilePage', () => {
  let component: UpateProfilePage;
  let fixture: ComponentFixture<UpateProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpateProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpateProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
