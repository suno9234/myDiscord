import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FixedLeftHeader from './FixedLeftHeader';
import Menu from './Menu';
import { useCallback } from 'react';

import { changeRightMenuState } from '../../../../redux/reducers/user';

const Wrapper = styled.div`
  position: relative;
  min-width: 0;
  width : 100%;
  height : 50px;
  flex-shrink : 1 ;
  overflow : hidden;
  
  background-color : #36393f;
  padding : 0;
  margin : 0;

  display:flex;
  align-items: center;
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
    dispatch(changeRightMenuState({state: 'online'}));
  }
  const onClickAll = ()=>{
    dispatch(changeRightMenuState({state: 'all'}));
  }
  const onClickWaitng = ()=>{
    dispatch(changeRightMenuState({state: 'waiting'}));
  }
  const onClickRecommend = ()=>{
    dispatch(changeRightMenuState({state: 'recommend'}));
  }
  const onClickBanned = ()=>{
    dispatch(changeRightMenuState({state: 'banned'}));
  }

  const onClickAddFrineds = useCallback(() => {
    dispatch(changeRightMenuState({state : 'addFriends'}))
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
      <Menu menuName={'친구 추가하기'} ml='532px' onClickMenu={onClickAddFrineds} bgColor={'green'} />

    </Wrapper>
  )
}

export default FlexHeader;