import { PieceType } from "./piece-type.type";
import { Position } from "./position.type";

export interface PieceCreate {
  position: Position;
  pieceType: PieceType
}
