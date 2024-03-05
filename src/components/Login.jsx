import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
  return (
    <div>Login</div>
  )
}           
export default Login