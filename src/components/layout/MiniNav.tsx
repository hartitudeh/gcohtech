import styled from "styled-components"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const MiniNavContainer = styled.div`
  background-color: #1a3a52;
  color: white;
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    color: white;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;

    &:hover {
      color: #4CAF50;
    }
  }

  svg {
    font-size: 16px;
  }
`

const EmailSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: #4CAF50;
    }
  }
`

export default function MiniNav() {
  return (
    <MiniNavContainer>
      <EmailSection>
        <span>✉️</span>
        <a href="mailto:support@gcohtech.edu.ng">support@gcohtech.edu.ng</a>
        <span>✉️</span>
        <a href="mailto:gcohtech@gmail.com">gcohtech@gmail.com</a>
      </EmailSection>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <span>
            <FaFacebook />
          </span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
          <span>
            <FaTwitter />
          </span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <span>
            <FaInstagram />
          </span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <span>
            <FaLinkedin />
          </span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
          <span>
            <FaYoutube />
          </span>
        </a>
      </SocialLinks>
    </MiniNavContainer>
  )
}
