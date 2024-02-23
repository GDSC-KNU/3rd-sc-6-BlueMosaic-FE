import { useState, useEffect } from 'react';
import { Wrapper, Container } from "../styles/Layout"
import styled from "@emotion/styled"
import { Dashboard } from "../components/dashboard/dashboard"
import { MiniFrameSVG } from "../components/dashboard/MiniFrameSVG"
import HomeSVG from "../assets/HomeSVG.svg"
import { MediaApis } from "../hooks/useMediaQuery"

export const Collection = () => {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await MediaApis.get(1);
        setMediaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard currentPage="Collection">
          {/* Grid */}
          <GridContainer>
            {/* {mediaData.map((item, key) => (
              <MiniFrameSVG
                key={item.id}
                imageUrl={item.base64EncodedImage}
                text={item.fileType}
                date={item.fileName}
                handleCircleClickParent={""}
              />
            ))} */}
          </GridContainer>
        </Dashboard>
      </Container>
    </Wrapper>
  );
}

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  gap: 16px;
  align-items: stretch;
  align-content: flex-start;
`;
