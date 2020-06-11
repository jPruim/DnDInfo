import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];

  constructor(public storage: Storage) {

  }
  saveCharacter(character: Character){
    character.key = Date.now();
    this.characters.push(character);
    this.storage.set('characters',this.characters);
  }
  getAllCharacters(){
    return this.storage.get('characters').then(
      (characters)=>{
        this.characters = characters == null ? []: characters;
        return[...this.characters];
      }
    );
  }

}
