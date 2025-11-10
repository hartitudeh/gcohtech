"use client"

import { useState } from "react"
import styled from "styled-components"
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  cursor: pointer;
  aspect-ratio: 1;
  background-color: var(--color-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

    .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;

  button {
    background-color: var(--color-accent);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-primary);
    }
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
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
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  z-index: 1001;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;
  z-index: 1001;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;

    &.prev {
      left: 0.5rem;
    }

    &.next {
      right: 0.5rem;
    }
  }
`

const ImageCounter = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  z-index: 1001;
`

interface GalleryGridProps {
  images: string[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1))
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1))
    }
  }

  return (
    <>
      <GridContainer>
        {images.map((image, index) => (
          <ImageCard key={index} onClick={() => openModal(index)}>
            <img src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} />
            <Overlay className="overlay">
              <button>View</button>
            </Overlay>
          </ImageCard>
        ))}
      </GridContainer>

      {selectedImageIndex !== null && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex] || "/placeholder.svg"}
              alt={`Gallery image ${selectedImageIndex + 1}`}
            />
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <NavButton className="prev" onClick={goToPrevious}>
              <FaChevronLeft />
            </NavButton>
            <NavButton className="next" onClick={goToNext}>
              <FaChevronRight />
            </NavButton>
            <ImageCounter>
              {selectedImageIndex + 1} / {images.length}
            </ImageCounter>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
