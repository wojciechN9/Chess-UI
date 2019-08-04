import { PieceType } from "../chess-board/piece-type.type";

export function getImgPath(pieceType: PieceType) {
  switch (pieceType) {
    case PieceType.Pawn:
      return "../../assets/img/pawn.png";
    case PieceType.Rook:
      return "../../assets/img/rook.png";
    case PieceType.Knight:
      return "../../assets/img/knight.png";
  }
}
