"use client"

import type React from "react"

import { useState } from "react"
import styled from "styled-components"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const LoginCard = styled.div`
  background-color: white;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 1rem;
    color: var(--color-text-secondary);
    font-size: 1.125rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(0, 168, 107, 0.1);
    }
  }

  .toggle-password {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    font-size: 1.125rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  label {
    margin: 0;
    font-weight: 400;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    cursor: pointer;
  }
`

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-light);
  }

  &:active {
    transform: scale(0.98);
  }
`

const ForgotPassword = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`

const InfoBox = styled.div`
  background-color: #dbeafe;
  border-left: 4px solid var(--color-primary);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  p {
    color: var(--color-primary);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.6;
  }
`

export default function AdmissionLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
  }

  return (
    <Container>
      <Title>Applicant Portal Login</Title>

      <InfoBox>
        <p>
          Use your registered email and password to access your application status and track your admission progress.
        </p>
      </InfoBox>

      <LoginCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <InputWrapper>
              <FaEnvelope className="icon" />
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <InputWrapper>
              <FaLock className="icon" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </InputWrapper>
          </FormGroup>

          <RememberMe>
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember me</label>
          </RememberMe>

          <LoginButton type="submit">Login to Portal</LoginButton>
        </form>

        <ForgotPassword>
          <a href="#forgot-password">Forgot your password?</a>
        </ForgotPassword>
      </LoginCard>
    </Container>
  )
}
