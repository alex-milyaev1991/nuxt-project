/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
import axios from 'axios'
import { result } from 'lodash'

const apiClient = axios.create({
  baseURL: `${process.env.apiUrl}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (process.client) {
      let token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth._token.local='))

      if (token) {
        token = decodeURIComponent(token.split('=')[1])
        config.headers['Authorization'] = token
      }
    }
    return config
  },
  function (error) {
    console.error(`${error}`)
    return Promise.reject(error)
  }
)

export default {
  async getMenuData() {
    try {
      let result = await apiClient.get(`/training/training-menu`)
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async getDataTypes() {
    try {
      let result = await apiClient.get('/training/data-types')
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async getTrainingData(trainingId) {
    let result = await apiClient.get(
      `/training/training-data?trainingId=${trainingId}`
    )
    return result.data
  },
  async addSection(sectionTitleEn, sectionTitleEs) {
    try {
      let result = await apiClient.post(
        `/training/add-section?sectionTitleEn=${sectionTitleEn}&sectionTitleEs=${sectionTitleEs}`
      )
      return result
    } catch (error) {
      console.error(error)
    }
  },
  async deleteSection(sectionId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-section?sectionId=${sectionId}`
      )
      return result
    } catch (error) {
      console.error(error)
    }
  },
  async renameSection(renamedTrainingSection, sectionId) {
    try {
      let result = await apiClient.post(
        `/training/rename-section?sectionId=${sectionId}&newTitleEn=${renamedTrainingSection.en}&newTitleEs=${renamedTrainingSection.es}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async addTrainingCategory(trainingTitleEn, trainingTitleEs, sectionId) {
    try {
      let result = await apiClient.post(
        `/training/add-training-category?categoryTitleEn=${trainingTitleEn}&categoryTitleEs=${trainingTitleEs}&sectionId=${sectionId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteTrainingCategory(trainingCategoryId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-training-category?trainingCategoryId=${trainingCategoryId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async getModules(trainingCategoryId) {
    try {
      let result = await apiClient.get(
        `/training/get-training-modules?trainingCategoryId=${trainingCategoryId}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async addModule(trainingCategoryId, moduleIndex) {
    try {
      let result = await apiClient.post(
        `/training/add-module?trainingCategoryId=${trainingCategoryId}&displayOrder=${moduleIndex}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateModuleDisplayOrder(modules) {
    modules.forEach(async (module, index) => {
      let result = await apiClient.post(
        `/training/module-display-order?moduleId=${module.trainingModuleId}&displayOrder=${index}`
      )
      return result.data
    })
  },
  async deleteModule(trainingModuleId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-module?trainingModuleId=${trainingModuleId}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async getLessons(trainingModuleId) {
    try {
      let result = await apiClient.get(
        `/training/get-module-lessons?trainingModuleId=${trainingModuleId}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async addLesson(trainingModuleId, lessonIndex) {
    try {
      let result = await apiClient.post(
        `/training/add-lesson?trainingModuleId=${trainingModuleId}&displayOrder=${lessonIndex}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteLesson(lessonId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-lesson?lessonId=${lessonId}`
      )
      result.data.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateLessonDisplayOrder(lessons) {
    lessons.forEach(async (lesson, index) => {
      let result = await apiClient.post(
        `/training/lesson-display-order?trainingLessonId=${lesson.trainingLessonId}&displayOrder=${index}`
      )
      return result.data
    })
    return result.data
  },
  async markCategoryPublishedStatus(trainingCategoryId, newPublishedStatus) {
    try {
      let result = await apiClient.post(
        `/training/category-published-status?trainingCategoryId=${trainingCategoryId}&newPublishedStatus=${newPublishedStatus}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async markModulePublishedStatus(moduleId, newPublishedStatus) {
    try {
      let result = await apiClient.post(
        `/training/module-published-status?moduleId=${moduleId}&newPublishedStatus=${newPublishedStatus}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async markLessonPublishedStatus(lessonId, newPublishedStatus) {
    try {
      let result = await apiClient.post(
        `/training/lesson-published-status?lessonId=${lessonId}&newPublishedStatus=${newPublishedStatus}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateTrainingCategoryTitle(title, trainingCategoryId) {
    try {
      let result = await apiClient.post(
        `/training/set-category-title?titleEn=${title.en}&titleEs=${title.es}&trainingCategoryId=${trainingCategoryId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateCategorySubtitle(subtitle, trainingCategoryId) {
    try {
      let result = await apiClient.post(
        `/training/set-category-subtitle?subtitleEn=${subtitle.en}&subtitleEs=${subtitle.es}&trainingCategoryId=${trainingCategoryId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateModuleTitle(moduleId, title) {
    try {
      let result = await apiClient.post(
        `/training/set-module-title?moduleId=${moduleId}&titleEn=${title.en}&titleEs=${title.es}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateLessonTitle(lessonId, title) {
    try {
      let result = await apiClient.post(
        `/training/set-lesson-title?lessonId=${lessonId}&titleEn=${title.en}&titleEs=${title.es}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateContentUrl(lessonId, contentUrl) {
    try {
      let result = await apiClient.post(
        `/training/set-content-url?lessonId=${lessonId}&contentUrlEn=${contentUrl.en}&contentUrlEs=${contentUrl.es}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateContentType(trainingLessonId, trainingLessonTypeId) {
    try {
      let result = await apiClient.post(
        `/training/update-content-type?trainingLessonId=${trainingLessonId}&trainingLessonTypeId=${trainingLessonTypeId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async getAllQuizzes() {
    try {
      let result = await apiClient.get(`/training/all-quizzes`)
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async getQuizData(quizId) {
    try {
      let result = await apiClient.get(
        `/training/get-quiz-data?trainingQuizId=${quizId}`
      )
      result.data.questions.sort((a, b) => {
        return a.displayOrder - b.displayOrder
      })
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async addNewQuiz() {
    try {
      let result = await apiClient.post('/training/add-quiz')
      return result.data
    } catch (error) {
      console.error(error)
    }
  },
  async addQuestion(quizId) {
    try {
      let result = await apiClient.post(
        `/training/add-quiz-question?trainingQuizId=${quizId}`
      )
      result.data.forEach((question) => {
        if (!question.correctAnswer) {
          if (question.answers.length !== 0) {
            question.correctAnswer = question.answers[0]
          } else {
            question.correctAnswer = {
              TrainingQuizAnswerId: 1,
            }
          }
        }
      })
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async reorderQuizQuestions(questions) {
    try {
      questions.forEach(async (question, index) => {
        let result = await apiClient.post(
          `/training/question-display-order?quizQuestionId=${question.trainingQuizQuestionId}&displayOrder=${index}`
        )
        return result.data
      })
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateQuizTitle(quizId, quizTitleEn, quizTitleEs) {
    try {
      let result = await apiClient.post(
        `/training/update-quiz-title?trainingQuizId=${quizId}&quizTitleEn=${quizTitleEn}&quizTitleEs=${quizTitleEs}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateQuestionTitle(questionId, titleEn, titleEs) {
    try {
      let result = await apiClient.post(
        `/training/update-question-title?trainingQuizQuestionId=${questionId}&titleEn=${titleEn}&titleEs=${titleEs}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async deleteQuestion(questionId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-question?trainingQuizQuestionId=${questionId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async addAnswer(questionId) {
    try {
      let result = await apiClient.post(
        `/training/add-answer?trainingQuizQuestionId=${questionId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async deleteAnswer(answerId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-answer?answerId=${answerId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateAnswer(answerId, titleEn, titleEs) {
    try {
      let result = await apiClient.post(
        `/training/update-answer-title?answerId=${answerId}&titleEn=${titleEn}&titleEs=${titleEs}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async setCorrectAnswer(questionId, answerId) {
    try {
      let result = await apiClient.post(
        `/training/update-correct-answer?answerId=${answerId}&questionId=${questionId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async updateFeedbackSentence(questionId, titleEn, titleEs) {
    try {
      let result = await apiClient.post(
        `/training/update-feedback?questionId=${questionId}&titleEn=${titleEn}&titleEs=${titleEs}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async assignQuizToLesson(lessonId, quizId) {
    try {
      let result = await apiClient.post(
        `/training/set-lesson-quiz?lessonId=${lessonId}&quizId=${quizId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async deleteQuiz(quizId) {
    try {
      let result = await apiClient.delete(
        `/training/delete-quiz?quizId=${quizId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
  async unassignQuiz(quizId) {
    try {
      let result = await apiClient.post(
        `/training/unassign-quiz?quizId=${quizId}`
      )
      return result.data
    } catch (error) {
      console.error(error)
      return error
    }
  },
}
