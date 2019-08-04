import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Piece } from "../chess-board/piece.type";
import { PieceType } from "../chess-board/piece-type.type";
import { PieceCreate } from "../chess-board/piece-create.type";
import { PieceUpdate } from "../chess-board/piece-update.type";

@Injectable()
export class GameHttpService {
  private readonly apiEndpoint;
  constructor(private http: HttpClient) {
    this.apiEndpoint = environment.apiUrl;
  }

  start(pieceCreate: PieceCreate): Observable<Piece> {
    return this.http.post<any>(this.apiEndpoint + 'Game/start', pieceCreate);
  }

  move(pieceUpdate: PieceUpdate): Observable<Piece> {
    return this.http.post<any>(this.apiEndpoint + 'Game/move', pieceUpdate);
  }

  getPieceTypes(): Observable<PieceType[]> {
    return this.http.get<PieceType[]>(this.apiEndpoint + 'Game/getPieceTypes');
  }
}
