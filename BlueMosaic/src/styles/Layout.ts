import styled from "@emotion/styled"
import WaterWave from 'react-water-wave';

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.backgroundImage});
  background-size: cover; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperWave = styled(WaterWave)`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export const DivCenterContainter = styled.div`
  display: flex;
  width: 37.5rem;
  height: 27.875rem;
  padding-top: 4.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background: var(----white-color, #FFF);

  section{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: var(--2nd-text, #808080);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  span {
    color: var(----googleRed-color, #EA4335);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: filter 0.3s ease;
  }
  
  button:hover {
    filter: brightness(70%);
  }
`


export const DivContainer = styled.section`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  padding: 3rem 3rem 3rem 3rem;
  margin-left: auto; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  border-radius: 3.125rem 0rem 0rem 3.125rem;
  background: var(--white-color);

  button {
    border: none;
    background: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: filter 0.3s ease;
    border-radius: 20px; 
    border: 2px solid var(--googleblue-color);
  
    &:hover {
      filter: brightness(70%);
    }
  }
`

export const Center = `
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`