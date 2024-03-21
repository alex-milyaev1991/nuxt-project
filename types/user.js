/* eslint-disable no-unused-vars */

/**
 * Represents the data which can be used to create a new user.
 * @typedef {Object} UserOptions
 * @property {string} [password] - The password of the user.
 * @property {number} [groupId] - The group ID of the user.
 * @property {string} [businessName] - The business name of the user.
 * @property {string} [firstName] - The first name of the user.
 * @property {string} [lastName] - The last name of the user.
 * @property {string} [phoneNumber] - The phone number of the user.
 * @property {string} [email] - The email of the user.
 * @property {string} [taxNumber] - The tax number of the user.
 * @property {number} [taxNumberTypeId] - The tax number type ID of the user.
 * @property {number} [defaultLanguageId] - The default language ID of the user.
 * @property {Date|string} [birthdate] - The birthdate of the user.
 * @property {AddressOptions} [address] - The address options of the user.
 */
exports.UserOptions = this.UserOptions

/**
 * Represents all data saved for a User
 * @typedef {Object} User
 * @property {string} [username] - The username of the user.
 * @property {string} [password] - The password of the user.
 * @property {number} [groupId] - The group ID of the user.
 * @property {string} [businessName] - The business name of the user.
 * @property {string} [firstName] - The first name of the user.
 * @property {string} [lastName] - The last name of the user.
 * @property {string} [homePhone] - The home phone of the user.
 * @property {string} [workPhone] - The work phone of the user.
 * @property {string} [cellPhone] - The cell phone of the user.
 * @property {string} [faxPhone] - The fax phone of the user.
 * @property {string} [email] - The email of the user.
 * @property {string} [taxNumber] - The tax number of the user.
 * @property {number} [taxNumberTypeId] - The tax number type ID of the user.
 * @property {number} [taxExempt] - The tax exemption status of the user.
 * @property {number} [defaultLanguageId] - The default language ID of the user.
 * @property {number} [active] - The active status of the user.
 * @property {string} [siteName] - The site name of the user.
 * @property {string} [referralCode] - The referral code of the user.
 * @property {number} [enrollmentComplete] - The enrollment completion status of the user.
 * @property {Date|string} [birthdate] - The birthdate of the user.
 * @property {number} [missingCreditCard] - The missing credit card status of the user.
 * @property {string} [secondaryTaxNumber] - The secondary tax number of the user.
 * @property {Date|string} [upgradeDate] - The upgrade date of the user.
 * @property {number} [suspended] - The suspension status of the user.
 * @property {Date|string} [suspendedTimestamp] - The suspension timestamp of the user.
 */
exports.User = this.User

/**
 * Represents options for creating an address
 * @typedef {Object} AddressOptions
 * @property {string} [name] - The full name on the address.
 * @property {string} [firstName] - The first name on the address.
 * @property {string} [lastName] - The last name on the address.
 * @property {string} [line1] - The first line of the address.
 * @property {string} [line2] - The second line of the address.
 * @property {string} [city] - The city of the address.
 * @property {number} [stateId] - The state ID of the address.
 * @property {string} [zip] - The ZIP code of the address.
 * @property {number} [countryId] - The country ID of the address.
 * @property {string} [phoneNumber] - The phone number of the address.
 * @property {string} [email] - The email of the address.
 */
exports.AddressOptions = this.AddressOptions

/**
 * Represents all data saved for an address
 * @typedef {Object} Address
 * @property {string} [name] - The full name on the address.
 * @property {string} [line1] - The first line of the address.
 * @property {string} [line2] - The second line of the address.
 * @property {string} [city] - The city of the address.
 * @property {number} [stateId] - The state ID of the address.
 * @property {string} [zip] - The ZIP code of the address.
 * @property {number} [countryId] - The country ID of the address.
 * @property {string} [phoneNumber] - The phone number of the address.
 * @property {string} [email] - The email of the address.
 */
exports.Address = this.Address

/**
 * Represents the possible referral data gathered from a replicate site.
 * @typedef {Object} ReferralData
 * @property {string} [referralCode] - The referral code for the user.
 * @property {string} [specialistSite] - The specialist site for the user.
 */
exports.ReferralData = this.ReferralData
