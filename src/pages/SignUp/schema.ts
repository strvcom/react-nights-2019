import { object, string, ref } from 'yup'

export const schema = object().shape({
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  firstName: string(),
  password: string()
    .min(6, 'Password is too short')
    .max(30, 'Password is too long')
    .matches(/[0-9]/u, 'Password should contain at least one number')
    .matches(/[a-z]/u, 'Password should contain at least one lowercase letter')
    .required('Password is required'),
  passwordConfirm: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Must confirm password'),
})
