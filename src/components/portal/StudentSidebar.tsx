"use client"
import styled from "styled-components"
import { useNavigate, useLocation } from "react-router-dom"

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 250px;
  background: #1a3a52;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  z-index: 1000;

  @media (max-width: 768px) {
    width: 75%;
  }
`

const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  font-size: 20px;
  font-weight: bold;
  background: #0f2a3d;
`

const NavList = styled.ul`
  list-style: none;
  padding: 20px 0;
  flex: 1;
  overflow-y: auto;
`

const NavItem = styled.li<{ active: boolean }>`
  padding: 0;
  margin: 0;

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 20px;
    color: ${(props) => (props.active ? "#4CAF50" : "white")};
    text-decoration: none;
    transition: all 0.3s ease;
    background: ${(props) => (props.active ? "rgba(76, 175, 80, 0.1)" : "transparent")};
    border-left: 3px solid ${(props) => (props.active ? "#4CAF50" : "transparent")};

    &:hover {
      background: rgba(76, 175, 80, 0.1);
      padding-left: 25px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const SidebarFooter = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px 15px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: #45a049;
    }
  }
`

interface StudentSidebarProps {
  isOpen: boolean
}

export default function StudentSidebar({ isOpen }: StudentSidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { path: "/student/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/student/courses", label: "My Courses", icon: "📚" },
    { path: "/student/grades", label: "Grades & Results", icon: "📈" },
    { path: "/student/attendance", label: "Attendance", icon: "✓" },
    { path: "/student/announcements", label: "Announcements", icon: "📢" },
    { path: "/student/profile", label: "Profile", icon: "👤" },
    { path: "/student/downloads", label: "Resources", icon: "⬇️" },
  ]

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>Student Portal</SidebarHeader>
      <NavList>
        {menuItems.map((item) => (
          <NavItem key={item.path} active={location.pathname === item.path}>
            <a onClick={() => navigate(item.path)}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          </NavItem>
        ))}
      </NavList>
      <SidebarFooter>
        <button onClick={() => navigate("/")}>Back to Home</button>
        <button onClick={() => alert("Logged out!")} style={{ background: "#d32f2f" }}>
          Logout
        </button>
      </SidebarFooter>
    </SidebarContainer>
  )
}
