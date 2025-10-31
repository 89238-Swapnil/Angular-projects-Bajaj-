import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:3000/api/questions'; 

  constructor(private http: HttpClient) { }

getTopics(): Observable<string[]> {
  return this.http.get<string[]>('http://localhost:3000/api/questions/topics');
}

getQuestionsByTopic(topic: string): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:3000/api/questions/${topic}`);
}



}
