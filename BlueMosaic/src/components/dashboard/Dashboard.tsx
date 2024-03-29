import styled from "@emotion/styled"
import { Achievements } from "./Achievements"
import { useNavigate } from "react-router-dom";

interface PageItemProps {
  active?: boolean;
}

export const Dashboard = ({ currentPage, children }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handlePageItemClick = (page) => {
    // Use the navigate function to redirect to the desired page
    switch (page) {
      case "Friend":
        navigate("/mypage");
        break;
      case "Collection":
        navigate("/collection");
        break;
      case "Event":
        // Handle other pages if needed
        break;
      default:
        break;
    }
  };

  return(
  <DashboardWrapper>
    <DashboardSidebar>
    <ol>
          <PageItem
            active={currentPage === "Friend"}
            onClick={() => handlePageItemClick("Friend")}
          >
            Friend
          </PageItem>
          <PageItem
            active={currentPage === "Collection"}
            onClick={() => handlePageItemClick("Collection")}
          >
            Collection
          </PageItem>
          <PageItem
            active={currentPage === "Event"}
            onClick={() => handlePageItemClick("Event")}
          >
            Event
          </PageItem>
        </ol>

      <Achievements/>

    </DashboardSidebar>
    <DashboardContainer>
      {children}
    </DashboardContainer>

  </DashboardWrapper>
  )
}

const DashboardWrapper = styled.main`
display: flex;
width: 80%;
height: 80%;
padding-bottom: 0.47231rem;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-radius: 1.875rem;
background: var(----white-color, #FFF);

/* Card Shadows/24dp - Shadow */
box-shadow: 0px 40px 48px 0px rgba(50, 50, 71, 0.25), 0px 24px 24px 0px rgba(50, 50, 71, 0.10);
`

const DashboardSidebar = styled.section`
display: flex;
position: relative; 
width: 100%;
height: 3rem;
flex-shrink: 0;

ol {
  display: inline-flex;
  align-items: center;
  gap: 2.5rem;
  font-feature-settings: 'clig' off, 'liga' off;

  padding-inline-start: 1rem;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; 
  }
`

const DashboardContainer = styled.section`
box-sizing: border-box;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.875rem;
flex-shrink: 0;
`

const PageItem = styled.ol<PageItemProps>`
  color: ${(props) => (props.active ? "var(--font-color)" : "var(----googleGray-color, #DFE1E5)")};
  cursor: pointer;
`;