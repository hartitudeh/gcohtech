"use client"

import styled from "styled-components"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"

const InfoContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const InfoCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .icon {
    font-size: 1.75rem;
    color: var(--color-accent);
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.125rem;
    color: var(--color-primary);
    margin: 0;
    font-weight: bold;
  }
`

const CardContent = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;

  p {
    margin: 0 0 0.5rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-accent);
      color: white;
    }

    svg {
      font-size: 1.125rem;
    }
  }
`

const DepartmentGrid = styled.div`
  display: grid;
  gap: 1rem;
`

const DepartmentItem = styled.div`
  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: 0.5rem;
  border-left: 3px solid var(--color-accent);

  .dept-name {
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }

  .dept-contact {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }
`

export default function ContactInfo() {
  return (
    <InfoContainer>
      <InfoCard>
        <CardHeader>
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Address</h3>
        </CardHeader>
        <CardContent>
          <p>123 Health Avenue</p>
          <p>Medical City, MC 12345</p>
          <p>Nigeria</p>
        </CardContent>
      </InfoCard>

      <InfoCard>
        <CardHeader>
          <div className="icon">
            <FaPhone />
          </div>
          <h3>Phone</h3>
        </CardHeader>
        <CardContent>
          <p>
            Main Office: <a href="tel:+2341234567890">+234 (123) 456-7890</a>
          </p>
          <p>
            Admissions: <a href="tel:+2341234567891">+234 (123) 456-7891</a>
          </p>
          <p>
            Support: <a href="tel:+2341234567892">+234 (123) 456-7892</a>
          </p>
        </CardContent>
      </InfoCard>

      <InfoCard>
        <CardHeader>
          <div className="icon">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
        </CardHeader>
        <CardContent>
          <p>
            General: <a href="mailto:info@gracecollege.edu">info@gracecollege.edu</a>
          </p>
          <p>
            Admissions: <a href="mailto:admissions@gracecollege.edu">admissions@gracecollege.edu</a>
          </p>
          <p>
            Support: <a href="mailto:support@gracecollege.edu">support@gracecollege.edu</a>
          </p>
        </CardContent>
      </InfoCard>

      <InfoCard>
        <CardHeader>
          <div className="icon">
            <FaClock />
          </div>
          <h3>Office Hours</h3>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
          </p>
          <p>
            <strong>Saturday:</strong> 9:00 AM - 1:00 PM
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>Public holidays: Closed</p>
        </CardContent>
      </InfoCard>

      <InfoCard>
        <CardHeader>
          <h3>Departments</h3>
        </CardHeader>
        <DepartmentGrid>
          <DepartmentItem>
            <div className="dept-name">Nursing Department</div>
            <div className="dept-contact">nursing@gracecollege.edu</div>
          </DepartmentItem>
          <DepartmentItem>
            <div className="dept-name">Medical Laboratory Science</div>
            <div className="dept-contact">mls@gracecollege.edu</div>
          </DepartmentItem>
          <DepartmentItem>
            <div className="dept-name">Health Administration</div>
            <div className="dept-contact">admin@gracecollege.edu</div>
          </DepartmentItem>
        </DepartmentGrid>
      </InfoCard>

      <InfoCard>
        <CardHeader>
          <h3>Follow Us</h3>
        </CardHeader>
        <SocialLinks>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </SocialLinks>
      </InfoCard>
    </InfoContainer>
  )
}
