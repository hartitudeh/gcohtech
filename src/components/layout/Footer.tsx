import styled from "styled-components"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const FooterContainer = styled.footer`
  background-color: #1a3a52;
  color: white;
  padding: 40px;
  // margin-top: 60px;
`

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const FooterSection = styled.div`
  h3 {
    margin-bottom: 15px;
    color: #4CAF50;
    font-size: 18px;
  }

  p, a {
    line-height: 1.8;
    font-size: 14px;
    color: #ddd;
  }

  a {
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #4CAF50;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    // background-color: #4CAF50;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    

    svg {
      font-size: 18px;
      color: white;

      &:hover {
      color: #45a049;
    }
    }
  }
`

const FooterBottom = styled.div`
  padding-top: 20px;
  text-align: center;
  color: #aaa;
  font-size: 14px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Grace College</h3>
          <p>
            Grace College of Health is dedicated to providing quality healthcare education and training to students
            worldwide.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/admission">Admission</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <p>📍 P.O.Box 1150, Rinsayo, Ring Road, Osogbo, Osun State, Nigeria.</p>
          <p>📞 +234 803 4655 532, +234 803 3601 965</p>
          <p>📧 support@gcohtech.edu.ng, gcohtech@gmail.com</p>
          <p>🕐 Mon - Fri: 8:00 AM - 5:00 PM</p>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
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
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2025 Grace College of Health. All rights reserved.</p>
        <hr style={{margin: "10px auto"}} />
        <p>With ❤️ by <a href="hartitudeh.vercel.app">Hartitudeh Tech</a></p>
      </FooterBottom>
    </FooterContainer>
  )
}
