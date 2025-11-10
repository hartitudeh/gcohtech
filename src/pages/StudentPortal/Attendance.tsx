"use client"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const AttendanceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AttendanceCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .course-name {
    font-weight: 600;
    color: #1a3a52;
    margin-bottom: 15px;
    font-size: 16px;
  }

  .attendance-stat {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 12px;

    .stat-icon {
      font-size: 24px;
    }

    .stat-info {
      flex: 1;

      .label {
        font-size: 12px;
        color: #999;
      }

      .value {
        font-size: 18px;
        font-weight: bold;
        color: #1a3a52;
      }
    }
  }

  .progress-bar {
    background: #e0e0e0;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 15px;

    .progress {
      height: 100%;
      border-radius: 5px;
      transition: width 0.3s ease;
    }

    &.excellent .progress {
      background: #4CAF50;
      width: 95%;
    }

    &.good .progress {
      background: #2196F3;
      width: 85%;
    }

    &.warning .progress {
      background: #FF9800;
      width: 70%;
    }
  }
`

const SummaryTable = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .table-header {
    background: #1a3a52;
    color: white;
    padding: 20px;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    font-weight: 600;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .table-row {
    padding: 20px;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    border-bottom: 1px solid #eee;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
      background: #f5f7fa;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 15px;
    }

    .course {
      font-weight: 500;
      color: #1a3a52;
    }

    .stat {
      text-align: center;
      font-size: 14px;
      color: #666;
    }

    .percentage {
      font-weight: 600;
      color: #4CAF50;
      font-size: 16px;
    }
  }
`

export default function Attendance() {
  const attendanceData = [
    { course: "Human Anatomy", present: 24, absent: 2, total: 26, percentage: 92 },
    { course: "Pharmacology", present: 22, absent: 1, total: 23, percentage: 95 },
    { course: "Clinical Practice I", present: 18, absent: 0, total: 18, percentage: 100 },
    { course: "Biochemistry", present: 25, absent: 1, total: 26, percentage: 96 },
    { course: "Pathology", present: 15, absent: 3, total: 18, percentage: 83 },
  ]

  return (
    <StudentLayout>
      <h1 style={{ color: "#1a3a52", marginBottom: "30px" }}>Attendance Tracking</h1>

      <AttendanceContainer>
        {attendanceData.map((course, index) => (
          <AttendanceCard key={index}>
            <div className="course-name">{course.course}</div>
            <div className="attendance-stat">
              <div className="stat-icon">✓</div>
              <div className="stat-info">
                <div className="label">Present</div>
                <div className="value">{course.present}</div>
              </div>
            </div>
            <div className="attendance-stat">
              <div className="stat-icon">✗</div>
              <div className="stat-info">
                <div className="label">Absent</div>
                <div className="value">{course.absent}</div>
              </div>
            </div>
            <div
              className={`progress-bar ${course.percentage >= 90 ? "excellent" : course.percentage >= 80 ? "good" : "warning"}`}
            >
              <div className="progress"></div>
            </div>
          </AttendanceCard>
        ))}
      </AttendanceContainer>

      <h2 style={{ color: "#1a3a52", marginBottom: "20px", marginTop: "40px" }}>Attendance Summary</h2>
      <SummaryTable>
        <div className="table-header">
          <div>Course</div>
          <div>Present</div>
          <div>Absent</div>
          <div>Total</div>
          <div>Percentage</div>
        </div>
        {attendanceData.map((course, index) => (
          <div className="table-row" key={index}>
            <div className="course">{course.course}</div>
            <div className="stat">{course.present}</div>
            <div className="stat">{course.absent}</div>
            <div className="stat">{course.total}</div>
            <div className="percentage">{course.percentage}%</div>
          </div>
        ))}
      </SummaryTable>
    </StudentLayout>
  )
}
