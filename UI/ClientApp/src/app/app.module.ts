import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { GameHttpService } from './http-services/game.service';
import { PieceSelectComponent } from './piece-select/piece-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    PieceSelectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PieceSelectComponent, pathMatch: 'full' },
      { path: 'chessBoard/:pieceType', component: ChessBoardComponent },
    ])
  ],
  providers: [GameHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
