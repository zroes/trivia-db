import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"



class QuestionsService {
  async getQuestions() {
    //@ts-ignore
    let response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
    console.log('axios', response)

    appState.questions = response.data.results.map(q => new Question(q))
  }

}

export const questionsService = new QuestionsService()