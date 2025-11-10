"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import StudentSidebar from "../../components/portal/StudentSidebar"
import StudentHeader from "../../components/portal/StudentHeader"

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ContentArea = styled.div`
  flex: 1;
  padding: 30px;
  margin: 0 0 0 15rem;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 1px;
  }
`

interface StudentLayoutProps {
  children: React.ReactNode
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <LayoutContainer>
      <StudentSidebar isOpen={sidebarOpen} />
      <MainContent>
        <StudentHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </LayoutContainer>
  )
}
