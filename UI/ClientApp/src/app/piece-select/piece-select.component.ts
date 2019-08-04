import { Component } from "@angular/core";
import { GameHttpService } from "../http-services/game.service";
import { PieceType } from "../chess-board/piece-type.type";
import { getImgPath } from "../utils/imgHelper";
import { Router } from "@angular/router";

@Component({
  selector: 'piece-select',
  templateUrl: './piece-select.component.html'
})

export class PieceSelectComponent {
  pieceTypes: PieceType[]; 

  constructor(private gameService: GameHttpService, private router: Router) {
    gameService.getPieceTypes().subscribe(result => this.pieceTypes = result);
  }

  getPath(pieceType: PieceType) {
    return getImgPath(pieceType);
  }

  onImageClicked(pieceType: PieceType) {
    this.router.navigate(['/chessBoard', pieceType]);
  }
}
