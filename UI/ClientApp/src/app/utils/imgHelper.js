"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var piece_type_type_1 = require("../chess-board/piece-type.type");
function getImgPath(pieceType) {
    switch (pieceType) {
        case piece_type_type_1.PieceType.Pawn:
            return "../../assets/img/pawn.png";
        case piece_type_type_1.PieceType.Rook:
            return "../../assets/img/rook.png";
        case piece_type_type_1.PieceType.Knight:
            return "../../assets/img/knight.png";
    }
}
exports.getImgPath = getImgPath;
//# sourceMappingURL=imgHelper.js.map