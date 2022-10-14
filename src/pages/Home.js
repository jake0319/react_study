import { Nav,NavLink,NavItem } from "reactstrap";
import {useRef} from 'react';

const Home = () => { 
    return(
        <div>
            <Nav>
  <NavItem>
    <NavLink
      active
      href="/"
      >
      HOME
    </NavLink>
  </NavItem>

  <NavItem>
    <NavLink href="/about">
      ABOUT
    </NavLink>
  </NavItem>

  <NavItem>
    <NavLink href="/gallery">
      GALLERY
    </NavLink>
  </NavItem>
  <NavItem >
    <NavLink href="/mypage">
      <p>고양이구경하쉴?</p>
    </NavLink>
  </NavItem>

</Nav>
        </div>
    )
};
export default Home;