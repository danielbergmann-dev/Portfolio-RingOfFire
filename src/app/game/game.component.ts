import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  games: any[] = [];

  game: Game = new Game();
  gameID: string | any = '';

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.newGame();

    this.route.params.subscribe((params) => {
      console.log('id', params['id']);
      this.gameID = params['id'];
      this.firestore
        .collection('games')
        .doc(this.gameID)
        .valueChanges()
        .subscribe((game: any) => {
          console.log('game update', game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCard = game.playedCard;
          this.game.stack = game.stack;
          this.game.players = game.players;
          this.game.currentCard = game.currentCard;
          this.game.pickCardAnimation = game.pickCardAnimation;
        });
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (
      this.game.players.length > 0 &&
      this.game.stack.length > 0 &&
      !this.game.pickCardAnimation
    ) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
      this.saveGame();
      setTimeout(() => {
        this.game.playedCard.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

  saveGame() {
    this.firestore
      .collection('games')
      .doc(this.gameID)
      .update(this.game.toJson());
  }

  editPlayer(playerId: number) {
    console.log('edit player', playerId);
  }
}
