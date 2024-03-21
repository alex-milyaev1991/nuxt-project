/* eslint-disable no-unused-vars */

/**
 * Represents options for a stress quiz category.
 * @typedef {Object} StressQuizCategoryOptions
 * @property {number} [stressQuizCategoryId] - The ID of the category.
 * @property {string} [name] - The name of the category.
 * @property {TranslationOptions} [titleTranslation] - Translation options for the category title.
 * @property {number} [displayOrder] - The display order of the category.
 * @property {number} [priority] - The priority of the category.
 */
exports.StressQuizCategoryOptions = this.StressQuizCategoryOptions

/**
 * Represents options for a stress quiz question.
 * @typedef {Object} StressQuizQuestionOptions
 * @property {number} [stressQuizQuestionId] - The ID of the question.
 * @property {string} [name] - The name of the question.
 * @property {TranslationOptions} [questionTranslation] - Translation options for the question.
 * @property {number} [displayOrder] - The display order of the question.
 * @property {number} [stressQuizCategoryId] - The ID of the category associated with the question.
 */
exports.StressQuizQuestionOptions = this.StressQuizQuestionOptions

/**
 * Represents options for a stress quiz session.
 * @typedef {Object} StressQuizSessionOptions
 * @property {number} [stressQuizSessionId] - The ID of the session.
 * @property {string} [username] - The username associated with the session.
 * @property {string} [referrerCode] - The referrer code.
 * @property {string} [referrerUsername] - The referrer username.
 * @property {string} [name] - The name of the user.
 * @property {string} [email] - The email of the user.
 * @property {number} [countryId] - The ID of the country.
 * @property {boolean} [shareResultsWithMentor] - Indicates if results should be shared with the mentor.
 * @property {StressQuizResponseOptions[]} [responses] - An array of responses.
 */
exports.StressQuizSessionOptions = this.StressQuizSessionOptions

/**
 * Represents possible points for a stress quiz response.
 * @typedef {0|1|2|3|4} StressQuizResponsePoints
 */
exports.StressQuizResponsePoints = this.StressQuizResponsePoints

/**
 * Represents options for a stress quiz response.
 * @typedef {Object} StressQuizResponseOptions
 * @property {number} [stressQuizResponseId] - The ID of the response.
 * @property {number} [stressQuizSessionId] - The ID of the session associated with the response.
 * @property {number} [stressQuizQuestionId] - The ID of the question associated with the response.
 * @property {StressQuizResponsePoints} [points] - The points awarded for the response.
 */
exports.StressQuizResponseOptions = this.StressQuizResponseOptions

/**
 * Represents options for a stress quiz category product.
 * @typedef {Object} StressQuizCategoryProductOptions
 * @property {number} [stressQuizCategoryProductId] - The ID of the category product.
 * @property {number} [stressQuizCategoryId] - The ID of the category associated with the product.
 * @property {number} [countryId] - The ID of the country.
 * @property {number} [productId] - The ID of the product.
 * @property {number} [priority] - The priority of the product.
 */
exports.StressQuizCategoryProductOptions = this.StressQuizCategoryProductOptions

/**
 * Represents options for a stress quiz package recommendation.
 * @typedef {Object} StressQuizPackageRecommendationOptions
 * @property {number} [stressQuizPackageRecommendations] - The ID of the recommendation.
 * @property {string} [username] - The username associated with the recommendation.
 * @property {number} [countryId] - The ID of the country.
 * @property {number} [productId] - The ID of the product.
 * @property {number} [priority] - The priority of the recommendation.
 * @property {boolean} [isDefault] - Indicates if it's a default recommendation.
 */
exports.StressQuizPackageRecommendationOptions =
  this.StressQuizPackageRecommendationOptions

/**
 * Represents a product recommendation.
 * @typedef {Object} ProductRecommendation
 * @property {number} productId - The ID of the product.
 * @property {number} priority - The priority of the recommendation.
 * @property {number} [stressQuizCategoryId] - The ID of the category associated with the recommendation.
 */
exports.ProductRecommendation = this.ProductRecommendation

/**
 * Represents a category result for a stress quiz.
 * @typedef {Object} CategoryResult
 * @property {number} stressQuizCategoryId - The ID of the category.
 * @property {number} categoryScore - The score for the category.
 * @property {number} maxCategoryScore - The maximum score for the category.
 * @property {StressQuizCategory} [stressQuizCategory] - The associated category.
 */
exports.CategoryResult = this.CategoryResult

/**
 * Represents a range for stress quiz results.
 * @typedef {"low"|"medium"|"high"} StressQuizResultRange
 */
exports.StressQuizQuestionOptions = this.StressQuizQuestionOptions

/**
 * Represents the result of a stress quiz.
 * @typedef {Object} StressQuizResult
 * @property {number} totalScore - The total score for the quiz.
 * @property {StressQuizResultRange} rangeKey - The range of the result.
 * @property {CategoryResult[]} resultsByCategory - The results by category.
 * @property {ProductRecommendation[]} recommendedPackages - The recommended packages.
 * @property {ProductRecommendation[]} recommendedProducts - The recommended products.
 */
exports.StressQuizResult = this.StressQuizResult

/**
 * Report item representing user information and related data.
 *
 * @typedef {Object} StressQuizReportItem
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} username - The username of the user.
 * @property {string} accountType - The type of the user's account.
 * @property {Object} referrer - Information about the referrer.
 * @property {string} referrer.firstName - The first name of the referrer.
 * @property {string} referrer.lastName - The last name of the referrer.
 * @property {string} referrer.username - The username of the referrer.
 * @property {Object} latestQuiz - Information about the latest quiz session.
 * @property {number} latestQuiz.stressQuizSessionId - The ID of the latest quiz session.
 * @property {Date} latestQuiz.completedAt - The date when the latest quiz was completed.
 * @property {number} latestQuiz.score - The score achieved in the latest quiz.
 * @property {number} quizSessionCount - The total number of quiz sessions.
 * @property {Object} lastPurchase - Information about the last purchase.
 * @property {string} lastPurchase.username - The username associated with the last purchase.
 * @property {string} lastPurchase.orderId - The ID of the last purchase order.
 * @property {string} lastPurchase.orderDate - The date when the last purchase was made.
 * @property {string} lastPurchase.orderType - The type of the last purchase order.
 * @property {string} lastPurchase.orderStatus - The status of the last purchase order.
 */
exports.StressQuizReportItem = this.StressQuizReportItem
