import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.answers = data.incorrect_answers
    this.answers.push(data.correct_answer)
    this.answers.sort()
    this.choice = ''
  }

  get AnswerTemplate() {
    let template = ``
    console.log(this.answers)
    this.answers.forEach(answer => {
      template += `
      <div class="col-6 card m-1 ans">
        <p id="${answer}" ${!(this.choice)
          ? `onclick="app.questionsController.checkAnswer('${answer}', '${this.id}')"`
          : ''} 
          class="py-2 mb-0">${answer}</p>
      </div>`
    });
    return template;
  }
  get QuestionTemplate() {
    return `
      <div class="mt-5 col-8">
        <h3 class="card p-2">${this.question}</h3>
        <div class="row p-2">
          ${this.AnswerTemplate}
        </div>
      </div>`
  }
}