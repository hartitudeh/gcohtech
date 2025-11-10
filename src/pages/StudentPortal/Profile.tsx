"use client"
import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import StudentLayout from "./StudentLayout"

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const ProfileSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ProfileCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .profile-header {
    background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%);
    padding: 30px 20px;
    text-align: center;
    color: white;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #4CAF50;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 15px;
      border: 4px solid white;
    }

    .name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    .student-id {
      font-size: 12px;
      opacity: 0.8;
    }
  }

  .profile-details {
    padding: 20px;

    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      font-size: 14px;

      &:last-child {
        border-bottom: none;
      }

      .label {
        color: #999;
        font-weight: 500;
      }

      .value {
        color: #1a3a52;
        font-weight: 600;
      }
    }
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Section = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;

  h2 {
    color: #1a3a52;
    margin-bottom: 20px;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
  }
`

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #1a3a52;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4CAF50;
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

  button {
    padding: 12px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &.save {
      background: #4CAF50;
      color: white;

      &:hover {
        background: #45a049;
      }
    }

    &.cancel {
      background: #e0e0e0;
      color: #1a3a52;

      &:hover {
        background: #d0d0d0;
      }
    }
  }
`

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@grace.edu",
    phone: "+1 (555) 123-4567",
    program: "Bachelor of Science in Nursing",
    year: "3rd Year",
    address: "123 Main Street, Springfield, USA",
    city: "Springfield",
    state: "Illinois",
    zipCode: "62701",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <StudentLayout>
      <h1 style={{ color: "#1a3a52", marginBottom: "30px" }}>My Profile</h1>

      <ProfileContainer>
        <ProfileSidebar>
          <ProfileCard>
            <div className="profile-header">
              <div className="avatar">JD</div>
              <div className="name">
                {profileData.firstName} {profileData.lastName}
              </div>
              <div className="student-id">STU20250001</div>
            </div>
            <div className="profile-details">
              <div className="detail-row">
                <span className="label">Program</span>
                <span className="value">{profileData.program}</span>
              </div>
              <div className="detail-row">
                <span className="label">Year Level</span>
                <span className="value">{profileData.year}</span>
              </div>
              <div className="detail-row">
                <span className="label">Email</span>
                <span className="value" style={{ fontSize: "12px" }}>
                  {profileData.email}
                </span>
              </div>
            </div>
          </ProfileCard>
        </ProfileSidebar>

        <MainContent>
          <Section>
            <h2>Personal Information</h2>
            {!isEditing ? (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <strong>First Name</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.firstName}</p>
                  </div>
                  <div>
                    <strong>Last Name</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.lastName}</p>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.email}</p>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.phone}</p>
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <strong>Address</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.address}</p>
                  </div>
                  <div>
                    <strong>City</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.city}</p>
                  </div>
                  <div>
                    <strong>State</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.state}</p>
                  </div>
                  <div>
                    <strong>Zip Code</strong>
                    <p style={{ color: "#666", marginTop: "5px" }}>{profileData.zipCode}</p>
                  </div>
                </div>
                <ButtonGroup>
                  <button className="save" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                </ButtonGroup>
              </>
            ) : (
              <>
                <FormGroup>
                  <label>First Name</label>
                  <input type="text" name="firstName" value={profileData.firstName} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={profileData.lastName} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <input type="email" name="email" value={profileData.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>Phone</label>
                  <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>Address</label>
                  <input type="text" name="address" value={profileData.address} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>City</label>
                  <input type="text" name="city" value={profileData.city} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>State</label>
                  <input type="text" name="state" value={profileData.state} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <label>Zip Code</label>
                  <input type="text" name="zipCode" value={profileData.zipCode} onChange={handleChange} />
                </FormGroup>
                <ButtonGroup>
                  <button className="save" onClick={() => setIsEditing(false)}>
                    Save Changes
                  </button>
                  <button className="cancel" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                </ButtonGroup>
              </>
            )}
          </Section>
        </MainContent>
      </ProfileContainer>
    </StudentLayout>
  )
}
