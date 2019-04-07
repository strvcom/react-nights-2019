import { object, string } from 'yup'

const schema = object().shape({
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  password: string().required('Password is required'),
})

export default schema
