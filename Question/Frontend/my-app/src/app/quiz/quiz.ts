import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css'], // fixed from styleUrl to styleUrls
  standalone: false
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentIndex = 0;
  hoverMsg = '';
  topic = '';

  constructor(private questionService: QuestionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.topic = this.route.snapshot.paramMap.get('topic')!;
    this.questionService.getQuestionsByTopic(this.topic)
      .subscribe(data => {
        this.questions = data.map(q => ({ ...q, showAnswer: false }));
      });
  }

  toggleAnswer(index: number) {
    if (this.questions[index]) {
      this.questions[index].showAnswer = !this.questions[index].showAnswer;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) this.currentIndex++;
  }

  prevQuestion() {
    if (this.currentIndex > 0) this.currentIndex--;
  }
}
