/* This password regular expression supports passwords that are at least 8 
characters long with at least one capital letter, one special character, and one number */

export const PASSWORD_REGEX = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
export const EMPTY_STRING = "";
export const ERROR_HEADER = 'Action Forbidden';
export const ERROR_MESSAGE = 'You must fill out all fields with valid inputs. Passwords must be at least 8 characters with one number, one uppercase letter, and one special character';