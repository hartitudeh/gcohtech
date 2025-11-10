"use client"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AnnouncementCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: all 0.3s ease;
  border-left: 4px solid #4CAF50;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .announcement-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    .title {
      font-size: 18px;
      font-weight: 600;
      color: #1a3a52;
    }

    .date {
      font-size: 12px;
      color: #999;
    }
  }

  .department {
    display: inline-block;
    background: #e3f2fd;
    color: #1565c0;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .content {
    color: #666;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid #eee;

    .priority {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;

      &.high {
        background: #ffebee;
        color: #c62828;
      }

      &.medium {
        background: #fff3e0;
        color: #e65100;
      }

      &.low {
        background: #e8f5e9;
        color: #2e7d32;
      }
    }

    button {
      background: #4CAF50;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      transition: background 0.3s ease;

      &:hover {
        background: #45a049;
      }
    }
  }
`

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Important: Final Examination Schedule Released",
      department: "Academic Affairs",
      content:
        "The final examination schedule for the current semester has been released. All students are required to check their portal for their individual examination timetable.",
      date: "Oct 30, 2025",
      priority: "high",
    },
    {
      id: 2,
      title: "Clinical Internship Applications Now Open",
      department: "Clinical Department",
      content:
        "Applications for the upcoming clinical internship program are now open. Interested students should submit their applications by November 10, 2025.",
      date: "Oct 28, 2025",
      priority: "medium",
    },
    {
      id: 3,
      title: "Library Extended Hours During Exam Period",
      department: "Library Services",
      content:
        "The college library will remain open until midnight during the examination period to support students with their studies.",
      date: "Oct 25, 2025",
      priority: "low",
    },
    {
      id: 4,
      title: "Course Add/Drop Deadline",
      department: "Registrar",
      content:
        "The deadline for adding or dropping courses without academic penalty is November 5, 2025. Please process any changes before this date.",
      date: "Oct 22, 2025",
      priority: "medium",
    },
    {
      id: 5,
      title: "Scholarship Application Deadline Extended",
      department: "Financial Aid",
      content:
        "Due to high demand, the scholarship application deadline has been extended to November 15, 2025. Don't miss this opportunity!",
      date: "Oct 20, 2025",
      priority: "low",
    },
  ]

  return (
    <StudentLayout>
      <h1 style={{ color: "#1a3a52", marginBottom: "30px" }}>Announcements</h1>

      <AnnouncementsContainer>
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id}>
            <div className="announcement-header">
              <div className="title">{announcement.title}</div>
              <div className="date">{announcement.date}</div>
            </div>
            <div className="department">{announcement.department}</div>
            <div className="content">{announcement.content}</div>
            <div className="footer">
              <span className={`priority ${announcement.priority}`}>{announcement.priority.toUpperCase()}</span>
              <button>Read More</button>
            </div>
          </AnnouncementCard>
        ))}
      </AnnouncementsContainer>
    </StudentLayout>
  )
}
