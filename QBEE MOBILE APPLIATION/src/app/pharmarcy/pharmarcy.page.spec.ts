import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmarcyPage } from './pharmarcy.page';

describe('PharmarcyPage', () => {
  let component: PharmarcyPage;
  let fixture: ComponentFixture<PharmarcyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmarcyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmarcyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
