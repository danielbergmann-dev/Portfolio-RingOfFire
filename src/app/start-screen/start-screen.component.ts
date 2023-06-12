import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  game: any;
  displayText = '';
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.displayText = 'Is your code on fire!?';
  }

  newGame() {
    // Start a new game
    let game = new Game();
    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameInfo: any) => {
        this.router.navigate(['/game', gameInfo.id]);

      });
  }
}
