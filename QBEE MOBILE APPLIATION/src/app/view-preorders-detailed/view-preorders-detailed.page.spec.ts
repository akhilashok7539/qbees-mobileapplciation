import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPreordersDetailedPage } from './view-preorders-detailed.page';

describe('ViewPreordersDetailedPage', () => {
  let component: ViewPreordersDetailedPage;
  let fixture: ComponentFixture<ViewPreordersDetailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreordersDetailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPreordersDetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
