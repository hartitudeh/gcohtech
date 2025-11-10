"use client"

import type React from "react"

import { useState } from "react"
import styled from "styled-components"
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa"

const FormContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: bold;
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

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(0, 168, 107, 0.1);
    }

    &::placeholder {
      color: var(--color-text-tertiary);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
    padding-top: 0.75rem;
  }
`

const SubmitButton = styled.button`
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

  &:disabled {
    background-color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
`

const SuccessMessage = styled.div`
  background-color: #d1fae5;
  border-left: 4px solid var(--color-accent);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <FormContainer>
      <FormTitle>Send us a Message</FormTitle>

      {submitted && (
        <SuccessMessage>
          Thank you! Your message has been sent successfully. We will get back to you soon.
        </SuccessMessage>
      )}

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Full Name</label>
          <InputWrapper>
            <FaUser className="icon" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email Address</label>
          <InputWrapper>
            <FaEnvelope className="icon" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Phone Number</label>
          <InputWrapper>
            <FaPhone className="icon" />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <label htmlFor="message">Message</label>
          <InputWrapper>
            <FaComment className="icon" />
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </FormGroup>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </form>
    </FormContainer>
  )
}
