"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%);
  padding: 40px 20px;
  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.6s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #1a3a52;
  margin-bottom: 10px;
  animation: slideDown 0.6s ease-out 0.2s backwards;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
  animation: slideDown 0.6s ease-out 0.3s backwards;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: slideUp 0.6s ease-out backwards;

  label {
    color: #1a3a52;
    font-weight: 500;
    font-size: 14px;
  }

  input {
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4CAF50;
      box-shadow: 0 0 8px rgba(76, 175, 80, 0.2);
      transform: translateY(-2px);
    }

    &:hover {
      border-color: #4caf50;
    }
  }
`

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  animation: slideUp 0.6s ease-out 0.15s backwards;

  input {
    width: auto;
    cursor: pointer;
    accent-color: #4caf50;
  }

  label {
    cursor: pointer;
  }
`

const LoginButton = styled.button`
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease-out 0.25s backwards;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  animation: slideUp 0.6s ease-out 0.35s backwards;

  a {
    color: #4CAF50;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #45a049;
      text-decoration: underline;
      transform: translateX(-2px);
    }
  }
`

const SignupPrompt = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  animation: slideUp 0.6s ease-out 0.4s backwards;

  a {
    color: #4CAF50;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      transform: translateX(2px);
    }
  }
`

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/student/dashboard")
  }

  return (
    <Container>
      <LoginBox>
        <Title>Welcome Back</Title>
        <Subtitle>Sign in to your account</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormGroup>

          <RememberMe>
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </RememberMe>

          <LoginButton type="submit">Sign In</LoginButton>
        </Form>

        <Links>
          <a href="#forgot">Forgot Password?</a>
          <a href="#help">Need Help?</a>
        </Links>

        <SignupPrompt>
          Don't have an account? <a href="/register">Create one here</a>
        </SignupPrompt>
      </LoginBox>
    </Container>
  )
}
