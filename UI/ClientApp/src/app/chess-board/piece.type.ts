import { Position } from "./position.type";
import { PieceType } from "./piece-type.type";

export interface Piece {
  position: Position;
  allowedMoves: Array<Position>;
  pieceType: PieceType
}
