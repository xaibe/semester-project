import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbputPage } from './abput.page';

describe('AbputPage', () => {
  let component: AbputPage;
  let fixture: ComponentFixture<AbputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
