import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";






function _drawQuestions() {
  let template = ''
  appState.questions.forEach(q => {
    template += q.QuestionTemplate
  })
  document.getElementById('questions').innerHTML = template
}

export class QuestionsController {

  constructor() {
    appState.on('questions', _drawQuestions)
    // _drawQuestions()
    this.getQuestions()
  }

  async getQuestions() {
    await questionsService.getQuestions()
  }

  checkAnswer(ans, id) {
    let foundQuestion = appState.questions.find(q => q.id == id)
    if (foundQuestion.choice == '') {
      foundQuestion.choice = ans
      if (ans == foundQuestion.correct_answer) {
        console.log("correct!")
        document.getElementById(ans).innerText = `✅  ${ans}`
      }
      else {
        console.log("incorrect");
        document.getElementById(ans).innerText = `❌  ${ans}`
      }
    }
  }
}
