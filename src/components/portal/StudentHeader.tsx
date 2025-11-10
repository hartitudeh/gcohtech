"use client"
import styled from "styled-components"

const HeaderContainer = styled.div`
  background: white;
  padding: 20px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 17rem;

  @media (max-width: 768px) {
    padding: 15px 20px;
    margin: 1px;
    flex-direction: row-reverse;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    background: #1a3a52;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

const Title = styled.h1`
  font-size: 24px;
  color: #1a3a52;
  margin: 0;

  @media (max-width: 768px) {
      font-size: 16px;
      text-wrap: nowrap;
      display: none;
    }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .notification-badge {
    position: relative;
    cursor: pointer;
    font-size: 24px;

    .badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #d32f2f;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 12px;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #4CAF50;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }

    .info {
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
    }

      .name {
        font-weight: 600;
        color: #1a3a52;
        font-size: 14px;
      }

      .role {
        color: #999;
        font-size: 12px;
      }
    }
  }
`

interface StudentHeaderProps {
  onMenuClick: () => void
}

export default function StudentHeader({ onMenuClick }: StudentHeaderProps) {
  return (
    <HeaderContainer>
      <LeftSection>
        <Title>Welcome, Student</Title>
        <button onClick={onMenuClick}>☰</button>
      </LeftSection>
      <RightSection>
        <div className="notification-badge">
          <span>🔔</span>
          <div className="badge">3</div>
        </div>
        <div className="user-profile">
          <div className="avatar">JD</div>
          <div className="info">
            <span className="name">John Doe</span>
            <span className="role">Student</span>
          </div>
        </div>
      </RightSection>
    </HeaderContainer>
  )
}
