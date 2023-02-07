import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FixedLeftHeader from './FixedLeftHeader';
import Menu from './Menu';
import { useCallback } from 'react';

import { changeRightMenuState } from '../../../../redux/reducers/user';
import AddFriendMenu from './AddFrinedMenu';

const Wrapper = styled.div`
display:flex;
position: relative;
width : 100%;
height : 50px;
min-width: 0;
flex-shrink : 1 ;
overflow : hidden;
align-items: center;
background-color : #36393f;
border-bottom: 1px solid #202225;
`;

const Line = styled.div`
  position:absolute;
  min-width: 0;
  background-color: #454950;
  margin-left : 100px;
  height: 30px;
  width: 1px;
`;
// position: relative;
// 
const FlexHeader = () => {
  
  const dispatch = useDispatch();
  
  const onClickOnline = ()=>{
    dispatch(changeRightMenuState({state: '온라인'}));
  }
  const onClickAll = ()=>{
    dispatch(changeRightMenuState({state: '모두'}));
  }
  const onClickWaitng = ()=>{
    dispatch(changeRightMenuState({state: '대기 중'}));
  }
  const onClickRecommend = ()=>{
    dispatch(changeRightMenuState({state: '추천'}));
  }
  const onClickBanned = ()=>{
    dispatch(changeRightMenuState({state: '차단 목록'}));
  }

  const onClickAddFrineds = useCallback(() => {
    dispatch(changeRightMenuState({state : '친구 추가하기'}))
  }, []);

  return (
    <Wrapper>
      <FixedLeftHeader />
      <Line />
      <Menu menuName={'온라인'} ml='120px' onClickMenu={onClickOnline} />
      <Menu menuName={'모두'} ml='200px' onClickMenu={onClickAll}/>
      <Menu menuName={'대기 중'} ml='265px' onClickMenu={onClickWaitng}/>
      <Menu menuName={'추천'} ml='348px' onClickMenu={onClickRecommend}/>
      <Menu menuName={'차단 목록'} ml='440px' onClickMenu={onClickBanned}/>
      <AddFriendMenu menuName={'친구 추가하기'} ml='532px' onClickMenu={onClickAddFrineds} />

    </Wrapper>
  )
}

export default FlexHeader;