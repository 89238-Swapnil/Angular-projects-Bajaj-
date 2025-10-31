import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.html',
  styleUrls: ['./topics.css'], // fixed from styleUrl to styleUrls
  standalone: false
})
export class TopicsComponent implements OnInit {
  topics: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<string[]>('http://localhost:3000/api/questions/topics')
      .subscribe({
        next: data => this.topics = data,
        error: err => console.error('Error fetching topics', err)
      });
  }

  openTopic(topic: string) {
    this.router.navigate(['/quiz', topic]);
  }
}
