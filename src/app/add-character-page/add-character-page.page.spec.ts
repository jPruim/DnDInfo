import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCharacterPagePage } from './add-character-page.page';

describe('AddCharacterPagePage', () => {
  let component: AddCharacterPagePage;
  let fixture: ComponentFixture<AddCharacterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharacterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCharacterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
