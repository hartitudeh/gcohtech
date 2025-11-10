"use client"

import styled from "styled-components"

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
`

export default function ContactMap() {
  return (
    <MapContainer>
      <MapPlaceholder>
        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>GRACE College of Health Location</p>
          <p>123 Health Avenue, Medical City, MC 12345</p>
          <p style={{ fontSize: "0.875rem", marginTop: "1rem" }}>
            Integrate with Google Maps, Mapbox, or Leaflet for interactive map
          </p>
        </div>
      </MapPlaceholder>
    </MapContainer>
  )
}
