import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharacterPagePage } from './character-page.page';

describe('CharacterPagePage', () => {
  let component: CharacterPagePage;
  let fixture: ComponentFixture<CharacterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
