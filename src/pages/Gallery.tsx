"use client"

import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #1a3a52;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
`

const Tab = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isActive ? "#4CAF50" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "white" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#45a049" : "#e0e0e0")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 1;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .overlay {
    opacity: 1;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

const galleryData = {
  all: [
    {id: 1, image: "/ATAK6081.JPG", title: "Campus View"},
    {id: 2, image: "/DQCM6135.JPG", title: "Accreditation Day"},
    {id: 3, image: "/DQXX4572.JPG", title: "Accreditation Day"},
    {id: 4, image: "/accr-02.JPG", title: "Accreditation Day"},
    {id: 5, image: "/EPGR5878.JPG", title: "Accreditation Day"},
    {id: 6, image: "/IHZZ7972.JPG", title: "Accreditation Day"},
    {id: 7, image: "/accr-03.JPG", title: "Accreditation Day"},
    {id: 8, image: "/KLDB4734.JPG", title: "Accreditation Day"},
    {id: 9, image: "/MQIN3814.JPG", title: "Accreditation Day"},
    {id: 10, image: "/NIHU2379.JPG", title: "Accreditation Day"},
    {id: 11, image: "/OSLV8788.JPG", title: "Accreditation Day"},
    {id: 12, image: "/accr-04.JPG", title: "Accreditation Day"},
    {id: 13, image: "/accr-01.JPG", title: "Accreditation Day"},
    {id: 14, image: "/accr-05.JPG", title: "Accreditation Day"},
    {id: 15, image: "/accr-06.JPG", title: "Accreditation Day"},
    {id: 16, image: "/accr-07.JPG", title: "Accreditation Day"},
    {id: 17, image: "/accr-08.JPG", title: "Accreditation Day"},
    {id: 18, image: "/accr-09.JPG", title: "Accreditation Day"},
    {id: 19, image: "/accr-10.JPG", title: "Accreditation Day"},
    {id: 20, image: "/accr-11.JPG", title: "Accreditation Day"},
    {id: 21, image: "/accr-12.JPG", title: "Accreditation Day"},
    {id: 22, image: "/accr-13.JPG", title: "Accreditation Day"},
    {id: 23, image: "/accr-14.JPG", title: "Accreditation Day"},
    {id: 24, image: "/matric-01.JPG", title: "Matriculation Day"},
    {id: 25, image: "/matric-02.JPG", title: "Matriculation Day"},
    {id: 26, image: "/matric-04.JPG", title: "Matriculation Day"},
    {id: 27, image: "/matric-05.JPG", title: "Matriculation Day"},
    {id: 28, image: "/matric-06.JPG", title: "Matriculation Day"},
    {id: 29, image: "/matric-07.JPG", title: "Matriculation Day"},
    {id: 30, image: "/matric-08.JPG", title: "Matriculation Day"},
    {id: 31, image: "/lab.JPG", title: "Practical"},
    {id: 32, image: "/lab-01.JPG", title: "Practical"},
    {id: 33, image: "/lab-02.jpg", title: "Practical"},
    {id: 34, image: "/practical1.jpg", title: "Practical"},
    {id: 35, image: "/practical9.jpg", title: "Practical"},
    {id: 36, image: "/practical7.jpg", title: "Practical"},
    {id: 37, image: "//practical6.jpg", title: "Practical"},
    {id: 38, image: "/practical5.jpg", title: "Practical"},
    {id: 39, image: "/practical3.jpg", title: "Practical"},
    {id: 40, image: "/practical2.jpg", title: "Practical"},
    {id: 41, image: "/practical11.jpg", title: "Practical"},
    {id: 42, image: "/practical12.jpg", title: "Practical"},
    {id: 43, image: "/practical13.jpg", title: "Practical"},
  ],

  activities: [
    {id: 44, image: "/DQCM6135.JPG", title: "Event Day"},
    {id: 45, image: "/DQXX4572.JPG", title: "Event Day"},
    {id: 46, image: "/accr-02.JPG", title: "Event Day"},
    {id: 47, image: "/EPGR5878.JPG", title: "Event Day"},
    {id: 48, image: "/IHZZ7972.JPG", title: "Event Day"},
    {id: 49, image: "/accr-03.JPG", title: "Event Day"},
    {id: 50, image: "/KLDB4734.JPG", title: "Event Day"},
    {id: 51, image: "/MQIN3814.JPG", title: "Event Day"},
    {id: 52, image: "/NIHU2379.JPG", title: "Event Day"},
  ],

  campus: [
    {id: 53, image: "/OSLV8788.JPG", title: "Accreditation Day"},
    {id: 54, image: "/accr-04.JPG", title: "Accreditation Day"},
    {id: 55, image: "/accr-01.JPG", title: "Accreditation Day"},
    {id: 56, image: "/accr-05.JPG", title: "Accreditation Day"},
    {id: 57, image: "/accr-06.JPG", title: "Accreditation Day"},
    {id: 58, image: "/accr-07.JPG", title: "Accreditation Day"},
    {id: 59, image: "/accr-08.JPG", title: "Accreditation Day"},
    {id: 60, image: "/accr-09.JPG", title: "Accreditation Day"},
    {id: 61, image: "/accr-10.JPG", title: "Accreditation Day"},
  ],
  
  // labs: [
  //   { id: 5, image: "/medical-students-in-classroom.jpg", title: "Laboratory" },
  //   { id: 6, image: "/hospital-medical-facility.jpg", title: "Lab Equipment" },
  //   { id: 7, image: "/medical-professionals-teaching.jpg", title: "Lab Work" },
  //   { id: 8, image: "/college-provost-professional.jpg", title: "Research" },
  // ],
  
  clinical: [
    {id: 62, image: "/lab.JPG", title: "Practical"},
    {id: 63, image: "/lab-01.JPG", title: "Practical"},
    {id: 64, image: "/lab-02.jpg", title: "Practical"},
    {id: 65, image: "/practical1.jpg", title: "Practical"},
    {id: 66, image: "/practical9.jpg", title: "Practical"},
    {id: 67, image: "/practical7.jpg", title: "Practical"},
    {id: 68, image: "//practical6.jpg", title: "Practical"},
    {id: 69, image: "/practical5.jpg", title: "Practical"},
    {id: 70, image: "/practical3.jpg", title: "Practical"},
    {id: 71, image: "/practical2.jpg", title: "Practical"},
    {id: 72, image: "/practical11.jpg", title: "Practical"},
    {id: 73, image: "/practical12.jpg", title: "Practical"},
    {id: 74, image: "/practical13.jpg", title: "Practical"},
  ],
  events: [
    {id: 75, image: "/accr-08.JPG", title: "Accreditation Day"},
    {id: 76, image: "/accr-09.JPG", title: "Accreditation Day"},
    {id: 77, image: "/accr-10.JPG", title: "Accreditation Day"},
    {id: 78, image: "/college-provost-professional.jpg", title: "Ceremony" },
  ],
}

export default function ImageGallery() {
  const [activeTab, setActiveTab] = useState<keyof typeof galleryData>("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <Container>
      <Title>Gallery</Title>

      <TabContainer>
        <Tab isActive={activeTab === "all"} onClick={() => setActiveTab("all")}>
          All
        </Tab>
        <Tab isActive={activeTab === "campus"} onClick={() => setActiveTab("campus")}>
          Campus
        </Tab>
        {/* <Tab isActive={activeTab === "labs"} onClick={() => setActiveTab("labs")}>
          Labs
        </Tab> */}
        <Tab isActive={activeTab === "activities"} onClick={() => setActiveTab("activities")}>
          Activities
        </Tab>
        <Tab isActive={activeTab === "clinical"} onClick={() => setActiveTab("clinical")}>
          Clinical
        </Tab>
        <Tab isActive={activeTab === "events"} onClick={() => setActiveTab("events")}>
          Events
        </Tab>
      </TabContainer>

      <StyledGallery>
        {galleryData[activeTab].map((item) => (
          <GalleryItem key={item.id} onClick={() => setSelectedImage(item.image)}>
            <img src={item.image || "/placeholder.svg"} alt={item.title} />
            <Overlay className="overlay">{item.title}</Overlay>
          </GalleryItem>
        ))}
      </StyledGallery>

      <Modal isOpen={!!selectedImage} onClick={() => setSelectedImage(null)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {selectedImage && <img src={selectedImage || "/placeholder.svg"} alt="Gallery" />}
          <CloseButton onClick={() => setSelectedImage(null)}>✕</CloseButton>
        </ModalContent>
      </Modal>
    </Container>
  )
}
