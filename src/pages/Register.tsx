"use client"
import styled from "styled-components"
import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const FormWrapper = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  max-width: 700px;
  width: 100%;
  padding: 50px;
  animation: slideUp 0.6s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #4caf50 0%, #45a049 100%);
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
  border-radius: 10px;
`

const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 10px;
`

const StepBadge = styled.div<{ active: boolean; completed: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  background-color: ${(props) => (props.completed ? "#4caf50" : props.active ? "#2196f3" : "#e0e0e0")};
  color: ${(props) => (props.completed || props.active ? "white" : "#999")};
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`

const FormTitle = styled.h2`
  font-size: 28px;
  color: #1a3a52;
  margin-bottom: 10px;
  font-weight: 700;
`

const FormSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
  animation: slideUp 0.5s ease-out backwards;
  animation-delay: 0.1s;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: #d0d0d0;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const FileUpload = styled.div`
  border: 2px dashed #2196f3;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f5f7fa;

  &:hover {
    background-color: #e8f0ff;
    border-color: #1976d2;
  }

  input {
    display: none;
  }
`

const FileUploadText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`

const FileUploadLabel = styled.span`
  color: #2196f3;
  font-weight: 600;
  cursor: pointer;
`

const FileList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const FileTag = styled.div`
  background-color: #e8f0ff;
  color: #2196f3;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: none;
    border: none;
    color: #2196f3;
    cursor: pointer;
    font-size: 18px;
    padding: 0;
    line-height: 1;

    &:hover {
      color: #1976d2;
    }
  }
`

const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 13px;
  margin-top: 6px;
  animation: shake 0.3s ease-in-out;

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  flex: 1;
  padding: 14px 25px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.variant === "secondary" ? "transparent" : "#4caf50")};
  color: ${(props) => (props.variant === "secondary" ? "#4caf50" : "white")};
  border: ${(props) => (props.variant === "secondary" ? "2px solid #4caf50" : "none")};

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.variant === "secondary" ? "#4caf50" : "#45a049")};
    color: ${(props) => (props.variant === "secondary" ? "white" : "white")};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

interface FormErrors {
  [key: string]: string
}

interface RegisterFormState {
  // Step 1: Personal Information
  firstName: string; 
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  nationality: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;

  // Step 2: Document Submission
  documentsVerified: boolean; 

  // Step 3: Entrance Exam
  examDate: string;
  examCenter: string;
  readyForExam: boolean;

  // Step 4: Interview
  interviewDate: string;
  interviewTime: string;
  interviewComments: string;

  // Step 6: Enrollment
  agreeTerms: boolean;
  agreePrivacy: boolean;
  paymentMethod: string;
}
  
export default function Register() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState<RegisterFormState>({
  // Step 1: Personal Information (string fields initialized to "")
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  nationality: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",

  // Step 2: Document Submission (boolean field initialized to false)
  documentsVerified: false,

  // Step 3: Entrance Exam
  examDate: "",
  examCenter: "",
  readyForExam: false, // boolean field

  // Step 4: Interview
  interviewDate: "",
  interviewTime: "",
  interviewComments: "",

  // Step 6: Enrollment
  agreeTerms: false, // boolean field
  agreePrivacy: false, // boolean field
  paymentMethod: "",
})
  const [errors, setErrors] = useState<FormErrors>({})
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    switch (step) {
      case 1:
        if (!formData.firstName?.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email?.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
        if (!formData.phone?.trim()) newErrors.phone = "Phone number is required"
        if (!formData.dob) newErrors.dob = "Date of birth is required"
        if (!formData.gender) newErrors.gender = "Gender is required"
        if (!formData.nationality?.trim()) newErrors.nationality = "Nationality is required"
        if (!formData.address?.trim()) newErrors.address = "Address is required"
        if (!formData.city?.trim()) newErrors.city = "City is required"
        break

      case 2:
        if (!uploadedFiles || uploadedFiles.length === 0) {
          newErrors.documents = "At least one document is required"
        }
        break

      case 3:
        if (!formData.examDate) newErrors.examDate = "Exam date is required"
        if (!formData.examCenter?.trim()) newErrors.examCenter = "Exam center is required"
        break

      case 4:
        if (!formData.interviewDate) newErrors.interviewDate = "Interview date is required"
        if (!formData.interviewTime?.trim()) newErrors.interviewTime = "Interview time is required"
        break

      case 6:
        if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms and conditions"
        if (!formData.paymentMethod?.trim()) newErrors.paymentMethod = "Payment method is required"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Registration submitted:", formData)
      // Here you would submit the form data to your backend
      alert("Registration submitted successfully!")
      navigate("/login")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setUploadedFiles((prev) => [...prev, ...files])
    if (errors.documents) {
      setErrors((prev) => ({
        ...prev,
        documents: "",
      }))
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <FormTitle>Personal Information</FormTitle>
            <FormSubtitle>Please provide your basic personal details</FormSubtitle>

            <FormRow>
              <FormGroup>
                <Label>First Name *</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                  placeholder="John"
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label>Last Name *</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                  placeholder="Doe"
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Email Address *</Label>
              <Input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                placeholder="john@example.com"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label>Date of Birth *</Label>
                <Input type="date" name="dob" value={formData.dob || ""} onChange={handleInputChange} />
                {errors.dob && <ErrorMessage>{errors.dob}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label>Gender *</Label>
                <Select name="gender" value={formData.gender || ""} onChange={handleInputChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
                {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Nationality *</Label>
              <Input
                type="text"
                name="nationality"
                value={formData.nationality || ""}
                onChange={handleInputChange}
                placeholder="Nigerian"
              />
              {errors.nationality && <ErrorMessage>{errors.nationality}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Street Address *</Label>
              <Input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleInputChange}
                placeholder="123 Main Street"
              />
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label>City *</Label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city || ""}
                  onChange={handleInputChange}
                  placeholder="Lagos"
                />
                {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label>State/Province</Label>
                <Input
                  type="text"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleInputChange}
                  placeholder="Lagos"
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Zip Code</Label>
              <Input
                type="text"
                name="zipCode"
                value={formData.zipCode || ""}
                onChange={handleInputChange}
                placeholder="100001"
              />
            </FormGroup>
          </>
        )

      case 2:
        return (
          <>
            <FormTitle>Document Submission</FormTitle>
            <FormSubtitle>Upload all required documents (Transcripts, Certificates, etc.)</FormSubtitle>

            <FormGroup>
              <Label>Required Documents *</Label>
              <FileUpload>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <FileUploadText>
                  <FileUploadLabel onClick={() => document.getElementById("fileInput")?.click()}>
                    Click to upload
                  </FileUploadLabel>{" "}
                  or drag and drop
                </FileUploadText>
                <FileUploadText style={{ fontSize: "12px", marginTop: "8px" }}>
                  PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                </FileUploadText>
              </FileUpload>
              {errors.documents && <ErrorMessage>{errors.documents}</ErrorMessage>}
            </FormGroup>

            {uploadedFiles.length > 0 && (
              <>
                <Label style={{ marginTop: "20px" }}>Uploaded Documents ({uploadedFiles.length})</Label>
                <FileList>
                  {uploadedFiles.map((file, index) => (
                    <FileTag key={index}>
                      📄 {file.name}
                      <button onClick={() => removeFile(index)}>✕</button>
                    </FileTag>
                  ))}
                </FileList>
              </>
            )}

            <CheckboxGroup style={{ marginTop: "20px" }}>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  name="documentsVerified"
                  checked={formData.documentsVerified || false}
                  onChange={handleCheckboxChange}
                />
                All documents are authentic and true copies
              </CheckboxLabel>
            </CheckboxGroup>
          </>
        )

      case 3:
        return (
          <>
            <FormTitle>Entrance Examination</FormTitle>
            <FormSubtitle>Schedule your entrance examination</FormSubtitle>

            <FormGroup>
              <Label>Preferred Exam Date *</Label>
              <Input type="date" name="examDate" value={formData.examDate || ""} onChange={handleInputChange} />
              {errors.examDate && <ErrorMessage>{errors.examDate}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Exam Center *</Label>
              <Select name="examCenter" value={formData.examCenter || ""} onChange={handleInputChange}>
                <option value="">Select Exam Center</option>
                <option value="lagos">Lagos Center</option>
                <option value="ibadan">Ibadan Center</option>
                <option value="abuja">Abuja Center</option>
                <option value="kano">Kano Center</option>
                <option value="online">Online Examination</option>
              </Select>
              {errors.examCenter && <ErrorMessage>{errors.examCenter}</ErrorMessage>}
            </FormGroup>

            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  name="readyForExam"
                  checked={formData.readyForExam || false}
                  onChange={handleCheckboxChange}
                />
                I am ready to take the entrance examination
              </CheckboxLabel>
            </CheckboxGroup>
          </>
        )

      case 4:
        return (
          <>
            <FormTitle>Interview Scheduling</FormTitle>
            <FormSubtitle>Schedule your personal interview with the admissions committee</FormSubtitle>

            <FormGroup>
              <Label>Preferred Interview Date *</Label>
              <Input
                type="date"
                name="interviewDate"
                value={formData.interviewDate || ""}
                onChange={handleInputChange}
              />
              {errors.interviewDate && <ErrorMessage>{errors.interviewDate}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Preferred Interview Time *</Label>
              <Select name="interviewTime" value={formData.interviewTime || ""} onChange={handleInputChange}>
                <option value="">Select Time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </Select>
              {errors.interviewTime && <ErrorMessage>{errors.interviewTime}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>Additional Comments (Optional)</Label>
              <TextArea
                name="interviewComments"
                value={formData.interviewComments || ""}
                onChange={handleInputChange}
                placeholder="Share any additional information or concerns..."
              />
            </FormGroup>
          </>
        )

      case 5:
        return (
          <>
            <FormTitle>Admission Decision</FormTitle>
            <FormSubtitle>
              Your application is under review. You will receive your admission decision via email within 2-3 weeks.
            </FormSubtitle>

            <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#e8f5e9", borderRadius: "8px" }}>
              <p style={{ color: "#2e7d32", fontWeight: "600" }}>✓ Application Submitted Successfully</p>
              <p style={{ color: "#555", marginTop: "10px", fontSize: "14px" }}>
                Your reference number is: <strong>{Math.random().toString(36).substring(2, 11).toUpperCase()}</strong>
              </p>
              <p style={{ color: "#555", marginTop: "10px", fontSize: "14px" }}>
                Check your email regularly for updates on your application status.
              </p>
            </div>
          </>
        )

      case 6:
        return (
          <>
            <FormTitle>Enrollment & Payment</FormTitle>
            <FormSubtitle>Complete your enrollment and secure your place</FormSubtitle>

            <FormGroup>
              <Label>Payment Method *</Label>
              <Select name="paymentMethod" value={formData.paymentMethod || ""} onChange={handleInputChange}>
                <option value="">Select Payment Method</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="card">Credit/Debit Card</option>
                <option value="mobile_money">Mobile Money</option>
              </Select>
              {errors.paymentMethod && <ErrorMessage>{errors.paymentMethod}</ErrorMessage>}
            </FormGroup>

            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#fff3cd",
                borderRadius: "8px",
                borderLeft: "4px solid #ffc107",
              }}
            >
              <p style={{ color: "#856404", margin: "0", fontSize: "14px", fontWeight: "600" }}>
                💡 Tuition Fee: ₦500,000 per academic year
              </p>
            </div>

            <CheckboxGroup style={{ marginTop: "25px" }}>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms || false}
                  onChange={handleCheckboxChange}
                />
                I agree to the Terms and Conditions
              </CheckboxLabel>
              {errors.agreeTerms && <ErrorMessage>{errors.agreeTerms}</ErrorMessage>}
            </CheckboxGroup>

            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={formData.agreePrivacy || false}
                  onChange={handleCheckboxChange}
                />
                I have read and agree to the Privacy Policy
              </CheckboxLabel>
            </CheckboxGroup>
          </>
        )

      default:
        return null
    }
  }

  const stepTitles = [
    "Online Application",
    "Document Submission",
    "Entrance Exam",
    "Interview",
    "Admission Decision",
    "Enrollment",
  ]

  return (
    <FormContainer>
      <FormWrapper>
        <ProgressBar>
          <ProgressFill progress={progress} />
        </ProgressBar>

        <StepIndicator>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <StepBadge
              key={index + 1}
              active={currentStep === index + 1}
              completed={currentStep > index + 1}
              title={stepTitles[index]}
            >
              {currentStep > index + 1 ? "✓" : index + 1}
            </StepBadge>
          ))}
        </StepIndicator>

        {renderStepContent()}

        <ButtonGroup>
          <Button variant="secondary" onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </Button>
          {currentStep < totalSteps ? (
            <Button onClick={handleNext}>Next Step</Button>
          ) : (
            <Button onClick={handleSubmit}>Complete Registration</Button>
          )}
        </ButtonGroup>
      </FormWrapper>
    </FormContainer>
  )
}
