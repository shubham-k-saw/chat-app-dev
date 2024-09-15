import { z } from 'zod'
import { VALIDATION } from '../config/constant.js'

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email({ message: "Invalid Email address" })

const usernameSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(5, { message: "Username should be minimum 5 character long" })
  .max(20, { message: "Username should be maximum 20 character long" })
  .regex(/^[a-z_][a-z0-9_]*$/, { message: "Username must start with a letter or underscore, and can only contain alphanumeric characters and underscores" })

const firstnameSchema = z
  .string()
  .trim()
  .min(3, { message: "Firstname should be minimum 5 character long" })

const lastnameSchema = z
  .string()
  .trim()
  .min(2, { message: "Lastname should be minimum 5 character long" })

const passwordSchema = z
  .string()
  .min(8,)