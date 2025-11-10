"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"

const NavContainer = styled.nav`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #1a3a52;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #4CAF50;
  }
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    gap: 0;
    padding: 20px;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const NavLink = styled(Link)`
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #4CAF50;
  }

  @media (max-width: 768px) {
    padding: 12px 0;
    width: 100%;
  }
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const DropdownToggle = styled.button`
  background: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 12px 0;
  }
`

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    border: none;
    background-color: #f5f5f5;
    margin-top: 10px;
  }
`

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #4CAF50;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`

const MenuToggle = styled.button`
  display: none;
  background: none;
  color: #333;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false)

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/"><img src="/gcohtech-logo1.png" style={{height: 60, width: 240}} /></Logo>
        <MenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <span>
              <FaTimes />
            </span>
          ) : (
            <span>
              <FaBars />
            </span>
          )}
        </MenuToggle>
        <NavLinks isOpen={mobileMenuOpen}>
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>

          <DropdownContainer>
            <DropdownToggle onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}>About ▼</DropdownToggle>
            <DropdownMenu isOpen={aboutDropdownOpen}>
              <DropdownItem
                to="/about"
                onClick={() => {
                  setAboutDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                About the College
              </DropdownItem>
              <DropdownItem
                to="/about?tab=vision"
                onClick={() => {
                  setAboutDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Vision
              </DropdownItem>
              <DropdownItem
                to="/about?tab=mission"
                onClick={() => {
                  setAboutDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Mission
              </DropdownItem>
              <DropdownItem
                to="/about?tab=officials"
                onClick={() => {
                  setAboutDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Principal Officials
              </DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          <DropdownContainer>
            <DropdownToggle onClick={() => setAdmissionDropdownOpen(!admissionDropdownOpen)}>
              Admission ▼
            </DropdownToggle>
            <DropdownMenu isOpen={admissionDropdownOpen}>
              <DropdownItem
                to="/admission"
                onClick={() => {
                  setAdmissionDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Available Courses
              </DropdownItem>
              <DropdownItem
                to="/admission?tab=requirements"
                onClick={() => {
                  setAdmissionDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Requirements
              </DropdownItem>
              <DropdownItem
                to="/admission?tab=registration"
                onClick={() => {
                  setAdmissionDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Registration
              </DropdownItem>
              <DropdownItem
                to="/admission?tab=login"
                onClick={() => {
                  setAdmissionDropdownOpen(false)
                  setMobileMenuOpen(false)
                }}
              >
                Login
              </DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/login" onClick={() => setMobileMenuOpen(false)}>
            Login
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  )
}
