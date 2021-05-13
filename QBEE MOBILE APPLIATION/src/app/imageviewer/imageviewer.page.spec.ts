import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageviewerPage } from './imageviewer.page';

describe('ImageviewerPage', () => {
  let component: ImageviewerPage;
  let fixture: ComponentFixture<ImageviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageviewerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
