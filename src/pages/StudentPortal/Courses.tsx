"use client"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .course-header {
    background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%);
    padding: 20px;
    color: white;

    .course-code {
      font-size: 12px;
      opacity: 0.9;
      margin-bottom: 5px;
    }

    .course-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .instructor {
      font-size: 13px;
      opacity: 0.8;
    }
  }

  .course-content {
    padding: 20px;

    .course-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 15px;

      .detail-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .label {
          color: #999;
          font-size: 13px;
        }

        .value {
          color: #1a3a52;
          font-weight: 600;
          font-size: 14px;
        }
      }
    }

    .progress-bar {
      background: #e0e0e0;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 15px;

      .progress {
        background: #4CAF50;
        height: 100%;
        width: 75%;
      }
    }

    button {
      width: 100%;
      padding: 10px;
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
  }
`

export default function Courses() {
  const courses = [
    {
      code: "ANAT101",
      title: "Human Anatomy",
      instructor: "Dr. Sarah Johnson",
      credits: 4,
      progress: 75,
      status: "In Progress",
    },
    {
      code: "PHARM201",
      title: "Pharmacology",
      instructor: "Prof. Michael Chen",
      credits: 3,
      progress: 60,
      status: "In Progress",
    },
    {
      code: "CLIN301",
      title: "Clinical Practice I",
      instructor: "Dr. Emily Rodriguez",
      credits: 5,
      progress: 85,
      status: "In Progress",
    },
    {
      code: "BIO102",
      title: "Biochemistry",
      instructor: "Dr. James Wilson",
      credits: 4,
      progress: 90,
      status: "In Progress",
    },
    {
      code: "PATH202",
      title: "Pathology",
      instructor: "Prof. Amanda Lee",
      credits: 4,
      progress: 45,
      status: "In Progress",
    },
    {
      code: "PSYCH150",
      title: "Medical Psychology",
      instructor: "Dr. Robert Brown",
      credits: 3,
      progress: 70,
      status: "In Progress",
    },
  ]

  return (
    <StudentLayout>
      <h1 style={{ color: "#1a3a52", marginBottom: "30px" }}>My Courses</h1>
      <CoursesContainer>
        {courses.map((course, index) => (
          <CourseCard key={index}>
            <div className="course-header">
              <div className="course-code">{course.code}</div>
              <div className="course-title">{course.title}</div>
              <div className="instructor">{course.instructor}</div>
            </div>
            <div className="course-content">
              <div className="course-details">
                <div className="detail-item">
                  <span className="label">Credits</span>
                  <span className="value">{course.credits}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Progress</span>
                  <span className="value">{course.progress}%</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${course.progress}%` }}></div>
              </div>
              <button>View Details</button>
            </div>
          </CourseCard>
        ))}
      </CoursesContainer>
    </StudentLayout>
  )
}
