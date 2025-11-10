"use client"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const GradesContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 25px;
  background: #f5f7fa;
  border-bottom: 2px solid #eee;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;

  .stat-label {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
  }

  .stat-value {
    font-size: 28px;
    font-weight: bold;
    color: #4CAF50;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  


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
  @media (max-width: 768px) {
    overflow: scroll;
  }
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

      .grade {
        font-weight: 600;
        color: #4CAF50;
        font-size: 16px;
      }

      .letter-grade {
        display: inline-block;
        background: #4CAF50;
        color: white;
        padding: 4px 10px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }
`

const TableWrapper = styled.div`
  overflow-x: auto;
  padding: 0;
`

export default function Grades() {
  const grades = [
    { course: "Human Anatomy", exam: "Midterm", score: 87, letterGrade: "A-", date: "Oct 28, 2025" },
    { course: "Human Anatomy", exam: "Quiz 1", score: 92, letterGrade: "A", date: "Oct 15, 2025" },
    { course: "Pharmacology", exam: "Quiz", score: 88, letterGrade: "A-", date: "Oct 22, 2025" },
    { course: "Biochemistry", exam: "Midterm", score: 95, letterGrade: "A", date: "Oct 20, 2025" },
    { course: "Clinical Practice I", exam: "Assessment", score: 85, letterGrade: "B+", date: "Oct 25, 2025" },
    { course: "Pathology", exam: "Quiz", score: 78, letterGrade: "C+", date: "Oct 10, 2025" },
  ]

  return (
    <StudentLayout>
      <h1 style={{ color: "#1a3a52", marginBottom: "30px" }}>Grades & Results</h1>

      <GradesContainer>
        <StatsContainer>
          <StatCard>
            <div className="stat-label">Overall GPA</div>
            <div className="stat-value">3.8</div>
          </StatCard>
          <StatCard>
            <div className="stat-label">Average Score</div>
            <div className="stat-value">88%</div>
          </StatCard>
          <StatCard>
            <div className="stat-label">Highest Grade</div>
            <div className="stat-value">95</div>
          </StatCard>
          <StatCard>
            <div className="stat-label">Assessments</div>
            <div className="stat-value">6</div>
          </StatCard>
        </StatsContainer>

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Assessment Type</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.course}</td>
                  <td>{grade.exam}</td>
                  <td className="grade">{grade.score}</td>
                  <td>
                    <span className="letter-grade">{grade.letterGrade}</span>
                  </td>
                  <td>{grade.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </GradesContainer>
    </StudentLayout>
  )
}
