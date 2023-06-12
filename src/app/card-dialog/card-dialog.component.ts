import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-dialog',
  template: `
    <mat-card-content>
      {{ data.card ? data.description : 'Hier kannst du die Lösung der Aufgabe sehen' }}
    </mat-card-content>
  `,
})
export class CardDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { card: string, description: string }) { }
}
