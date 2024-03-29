import styled from "@emotion/styled"
import { TrashInfoStore } from "../../stores/TrashStore";
import { FriendInfoStore } from "../../stores/FriendStore";
import { FriendApis } from "../../hooks/useFriendQuery";
import { UserInfoStore } from "../../stores/UserInfoStore";
import { RankingApis } from "../../hooks/useRankingQuery";
import { useEffect, useState } from "react";
import { CircleSVG } from "./CircleSVG";

export const RankingList = () => {
  const [data, setData] = useState([]);
  const [mydata, setMydata] = useState();
  const [myfriend1, setMyfriend1] = useState();
  const [myfriend2, setMyfriend2] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await RankingApis.get();
        setData(result);
          
        // 본인 점수 찾기
        const currentUserId = UserInfoStore.getState().userId;
        const currentUserData = result.find(item => item.userId === currentUserId);
        setMydata(currentUserData);

        // 친구 점수 찾기
        const friends = await FriendApis.find();
        // friends 2명의 id를 저장
        const [friends1, friends2] = friends;
        setMyfriend1(result.find(item => item.userId === friends1.id));
        setMyfriend2(result.find(item => item.userId === friends2.id));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 


  return (
    <RankingWrapper>
      <h1>Leaderboard</h1>

      <MyScore>
        <section>
          <span>My score</span>
          <div>{mydata && mydata.score}P</div>
        </section>
      </MyScore>


      <RankingTop>
  {data.length > 0 && (
    <>
      <BehindSecondDiv>
        <CircleSVG imageUrl={data[1]?.userImageUrl} ranking="2"/>
        <span>{data[1]?.nickname}</span>
        <em>{data[1]?.score}P</em>
      </BehindSecondDiv>

      <FrontDiv>
        <CircleSVG imageUrl={data[0]?.userImageUrl} ranking="1"/>
        <span>{data[0]?.nickname}</span>
        <em>{data[0]?.score}P</em>
      </FrontDiv>

      <BehindThirdDiv>
        <CircleSVG imageUrl={data[2]?.userImageUrl} ranking="3"/>
        <span>{data[2]?.nickname}</span>
        <em>{data[2]?.score}P</em>
      </BehindThirdDiv>
    </>
  )}
</RankingTop>

      <RankingMine>
        <Mine>
          <Profile src={mydata && mydata.userImageUrl} alt="Profile Image" />
          <div>
            <span>{mydata && mydata.nickname}</span>
            <em>{mydata && mydata.score}P</em>
          </div>
        </Mine>

        <Friend>
          <Profile src={myfriend1 && myfriend1.userImageUrl} alt="Profile Image" />
          <div>
            <span>{myfriend1 && myfriend1.nickname}</span>
            <em>{myfriend1 && myfriend1.score}P</em>
          </div>
        </Friend>

        <Friend>
          <Profile src={myfriend2 && myfriend2.userImageUrl} alt="Profile Image" />
          <div>
            <span>{myfriend2 && myfriend2.nickname}</span>
            <em>{myfriend2 && myfriend2.score}P</em>
          </div>
        </Friend>
      </RankingMine>

    </RankingWrapper>

  );
};

const RankingWrapper = styled.div`
  padding-top: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
  border-radius: 3.125rem 0rem 0rem 3.125rem;
  background: var(----white-color, #FFF);

  h1 {
    color: var(--googleblue-color);
    text-align: center;
    font-family: Roboto;
    font-size: 2.125rem;
    font-weight: 700;
    margin: 0;
}` 

const RankingTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  z-index: 1000;

  span {
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 0.94169rem;
    font-weight: 300;
  } 

  em {
    color: #E4AA00;
    font-family: Montserrat;
    font-size: 1.17706rem;
    font-weight: 700;
  }
`;

const BehindSecondDiv = styled.div`
width: 8rem;
z-index: 2;
height: 8.875rem;
flex-shrink: 0;
border-radius: 0.94169rem 0rem 0rem 0.94169rem;
background: var(----googleGray-color, #DFE1E5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BehindThirdDiv = styled.div`
width: 8rem;
height: 8.875rem;
z-index: 1;
flex-shrink: 0;
border-radius: 0rem 0.94169rem 0.94169rem 0rem;
background: var(----googleGray-color, #DFE1E5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

em{
  color: var(--googlegreen-color);
}
`;

const FrontDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 100;

width: 9.57363rem;
height: 12.47706rem;
flex-shrink: 0;
border-radius: 2.35419rem 2.35419rem 0rem 0rem;
background: var(--googleWhiteGray-color);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

em{
  color: var(--googleblue-color);
}
`;

const RankingMine = styled.section`
display: flex;
padding: 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.62775rem;
flex-shrink: 0;
align-self: stretch;

span {
  color: #FAFCFF;
  font-family: Roboto;
  font-size: 1.09863rem;
  font-weight: 600;
  line-height: 150%; /* 1.64794rem */
}

em {
  color: rgba(240, 239, 239, 0.77);
  font-family: Roboto;
  font-size: 0.94169rem;
  font-weight: 500;
  line-height: 150%; /* 1.4125rem */
  text-transform: capitalize;
}
`;

const Profile = styled.img`
  width: 3.45275rem;
  height: 3.45275rem;
  border-radius: 3.92363rem;
  content: url(${props => props.src || '#D9D9D9'});
`;

const Mine = styled.div`
display: flex;
padding: 0.6375rem 11.6875rem 0.6375rem 1.25rem;
align-items: center;
gap: 1rem;
align-self: stretch;
border-radius: 1.25563rem;
background: var(--gradient, linear-gradient(135deg, #4285F4 0%, #B068E8 100%));

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`;

const Friend = styled.section`
display: flex;
padding: 0.9375rem 11.6875rem 0.9375rem 1.25rem;
align-items: center;
gap: 1rem;
align-self: stretch;
border-radius: 1.25563rem;
background: var(--googleWhiteGray-color);

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

span{
  color: var(--font-color);
}

em {
  color: var(--font-color);
}
`

const MyScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;

  span {
    color: var(--1st-text, #4A4543);
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 500;
  }

  div {
    display: flex;
    width: 22.5rem;
    padding: 0.8125rem 17.4375rem 0.8125rem 1rem;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid var(--Stroke, #DADADA);
  }
`