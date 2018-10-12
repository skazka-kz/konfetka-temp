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
        <Link>О Нас</Link>
        <Link>Карта</Link>
        <Link>Контакты</Link>
      </LinkContainer>
    </HeaderContainer>;
  }
}

export default Header;
