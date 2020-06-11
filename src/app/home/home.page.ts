import { Component } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  characters: Character[]=[];
  // characterService = new CharacterService();
  constructor(public navCtrl: NavController, private characterService: CharacterService) {}

  async ionViewWillEnter(){
    this.characters = await this.characterService.getAllCharacters();

  }

  goToAddCharacterPage(){
    this.navCtrl.navigateRoot('AddCharcterPage')
  }
}
