"use client"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 40px;
    margin-bottom: 12px;
  }

  .title {
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
  }

  .value {
    font-size: 32px;
    font-weight: bold;
    color: #1a3a52;
  }

  .details {
    font-size: 12px;
    color: #4CAF50;
    margin-top: 8px;
  }
`

const Section = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 22px;
    color: #1a3a52;
    margin-bottom: 20px;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  thead {
    background: #1a3a52;
    color: white;

    th {
      padding: 15px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #eee;
      transition: background 0.3s ease;

      &:hover {
        background: #f5f7fa;
      }

      td {
        padding: 15px;
        font-size: 14px;
        color: #333;
      }

      .status {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;

        &.active {
          background: #e8f5e9;
          color: #2e7d32;
        }

        &.completed {
          background: #e3f2fd;
          color: #1565c0;
        }
      }
    }
  }
`

export default function Dashboard() {
  return (
    <StudentLayout>
      <DashboardContainer>
        <Card>
          <div className="icon">📚</div>
          <div className="title">Active Courses</div>
          <div className="value">6</div>
          <div className="details">3 this semester</div>
        </Card>

        <Card>
          <div className="icon">📊</div>
          <div className="title">Current GPA</div>
          <div className="value">3.8</div>
          <div className="details">Excellent</div>
        </Card>

        <Card>
          <div className="icon">✓</div>
          <div className="title">Attendance</div>
          <div className="value">94%</div>
          <div className="details">Very Good</div>
        </Card>

        <Card>
          <div className="icon">📝</div>
          <div className="title">Pending Tasks</div>
          <div className="value">2</div>
          <div className="details">1 assignment due</div>
        </Card>
      </DashboardContainer>

      <Section>
        <h2>Recent Grades</h2>
        <Table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Type</th>
              <th>Score</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Human Anatomy</td>
              <td>Midterm</td>
              <td>87/100</td>
              <td>A-</td>
              <td>
                <span className="status completed">Posted</span>
              </td>
            </tr>
            <tr>
              <td>Pharmacology</td>
              <td>Quiz</td>
              <td>92/100</td>
              <td>A</td>
              <td>
                <span className="status completed">Posted</span>
              </td>
            </tr>
            <tr>
              <td>Clinical Practice</td>
              <td>Assessment</td>
              <td>Pending</td>
              <td>-</td>
              <td>
                <span className="status active">Pending</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2>Upcoming Assignments</h2>
        <Table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Course</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Research Project - Disease Case Study</td>
              <td>Human Anatomy</td>
              <td>Nov 15, 2025</td>
              <td>
                <span className="status active">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Lab Report</td>
              <td>Pharmacology</td>
              <td>Nov 18, 2025</td>
              <td>
                <span className="status active">Pending</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </StudentLayout>
  )
}
