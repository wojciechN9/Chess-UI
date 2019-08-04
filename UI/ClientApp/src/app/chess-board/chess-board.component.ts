import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GameHttpService } from "../http-services/game.service";
import { getImgPath } from "../utils/imgHelper";
import { PieceType } from "./piece-type.type";
import { Piece } from "./piece.type";
import { PieceCreate } from "./piece-create.type";
import { PieceUpdate } from "./piece-update.type";

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['../app.component.css']
})
export class ChessBoardComponent {
  public readonly boardSize = 8;
  public columns = [];
  public rows = [];
  public piece: Piece;
  public imgPath: string;
  public pieceType: PieceType;

  constructor(
    private gameService: GameHttpService,
    private router: Router,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.pieceType = +params['pieceType'];
      this.imgPath = getImgPath(this.pieceType);
    });

    for (var i = 0; i < this.boardSize; i++) {
      this.columns.push(i);
      this.rows.push(i);
    }
  }

  onPlateClicked(row: number, col: number) {
    if (!this.piece) {
      var newPiece = <PieceCreate>{
        position: { row: row, col: col },
        pieceType: this.pieceType
      };

      this.gameService.start(newPiece).subscribe(
        (result) => { this.piece = result });
    }
    else {
      var updatedPiece = <PieceUpdate>{
        position: { row: row, col: col }
      };
      this.gameService.move(updatedPiece).subscribe(
        (result) => { this.piece = result },
        error => alert(error.error));
    }
  }

  onReset() {
    this.router.navigate(['/']);
  }

  getPlateStyle(row: number, col: number) {
    var color = '';

    color = (row % 2 === 0 && col % 2 === 0 || row % 2 === 1 && col % 2 === 1) ? 'grey' : 'lightgrey';

    if (this.piece && this.piece.allowedMoves.find(x => x.row == row && x.col == col)) {
      color = 'blue';
    }

    return { 'background-color': color };
  }
}
