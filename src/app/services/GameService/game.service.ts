import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/Game/game.model';
import { GameMin } from 'src/app/models/Game/gameMin.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8080/games'

  constructor(private http:HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<GameMin[]>(this.apiUrl);
  }

  getGame(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    console.log(this.http.get<Game>(url))
    return this.http.get<Game>(url);
  }
}
