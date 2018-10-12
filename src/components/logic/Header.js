import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  LinkContainer,
  Link
} from "../presentation/Header";

import logo from "../../static/logo.png";

class Header extends React.Component {
  render() {
    return <HeaderContainer>
      <LogoContainer><img src={logo} alt="Конфетка Кокшетау Лого"/></LogoContainer>
      <LinkContainer>
        <Link href="#">О Нас</Link>
        <Link href="#">Карта</Link>
        <Link href="#">Контакты</Link>
      </LinkContainer>
    </HeaderContainer>;
  }
}

export default Header;
