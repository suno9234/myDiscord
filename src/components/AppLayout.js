import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import LeftMenu from './LeftMenuTab/LeftMenu';
import SideMenuTab from './SideMenuTab/SideMenuTab';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const AppLayout = ({ children }) => {
  return (
    <RemoveScroll style={{
      display: 'flex', flexDirection: 'column', height: '100%'
    }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <LeftMenu></LeftMenu>
        <div className='c1' style={{ width: '100%' ,height:'100%'}}>
          <Header />
          <div style={{ display: 'flex', width:'100%' , height:'100%'}}>
            <div style={{display:'flex' , flexDirection:'column'}}>
              <SideMenuTab />
              <Footer />
            </div>
            {children}
          </div>

        </div>

      </div>
    </RemoveScroll>
  )
}
export default AppLayout;