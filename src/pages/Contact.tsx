"use client"

import type React from "react"

import styled from "styled-components"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #1a3a52;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const InfoSection = styled.div`
  h2 {
    font-size: 24px;
    color: #1a3a52;
    margin-bottom: 25px;
  }
`

const InfoCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  align-items: flex-start;

  svg {
    color: #4CAF50;
    font-size: 24px;
    margin-top: 5px;
    flex-shrink: 0;
  }

  div {
    h3 {
      font-size: 16px;
      color: #1a3a52;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }

    a {
      color: #4CAF50;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const FormSection = styled.div`
  h2 {
    font-size: 24px;
    color: #1a3a52;
    margin-bottom: 25px;
  }
`

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #1a3a52;
    font-weight: 500;
    font-size: 14px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #4CAF50;
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <Container>
      <Title>Contact Us</Title>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>

      <ContentGrid>
        <InfoSection>
          <h2>Contact Information</h2>

          <InfoCard>
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h3>Address</h3>
              <p>
                P.O.Box 1150, Rinsayo, Ring Road,
                <br />
                Osogbo, Osun State, Nigeria.
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <span>
              <FaPhone />
            </span>
            <div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+2348034655532">+234 803 4655 532</a>
                <br />
                <a href="tel:+2348033601965">+234 803 3601 965</a>
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <span>
              <FaEnvelope />
            </span>
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:support@gcohtech.edu.ng">support@gcohtech.edu.ng</a>
                <br />
                <a href="mailto:gcohtech@gmail.com">gcohtech@gmail.com</a>
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <span>
              <FaClock />
            </span>
            <div>
              <h3>Office Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <div>
              <h3>Departments</h3>
              <p>
                <strong>Admission:</strong>{" "}
                <a href="mailto:admissions@gcohtech.edu.ng">admissions@gcohtech.edu.ng</a>
                <br />
                <strong>Academics:</strong> <a href="mailto:academics@gcohtech.edu.ng">academics@gcohtech.edu.ng</a>
                <br />
                <strong>Finance:</strong> <a href="mailto:finance@gcohtech.edu.ng">finance@gcohtech.edu.ng</a>
              </p>
            </div>
          </InfoCard>
        </InfoSection>

        <FormSection>
          <h2>Send us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="">Select a category</option>
                <option value="admission">Admission Inquiry</option>
                <option value="academic">Academic Question</option>
                <option value="facility">Facility Tour</option>
                <option value="other">Other</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required></textarea>
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormSection>
      </ContentGrid>
    </Container>
  )
}
