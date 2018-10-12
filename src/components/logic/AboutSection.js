import React from "react";
import {
  SectionContainer,
  Content,
  Title,
  Text,
  TransparentOverlay,
  PatternOverlay,
  SectionDivider
} from "../presentation/Section";
import ShopList from "../presentation/ShopSelector/ShopList";

class AboutSection extends React.Component {
  render(){
    return <SectionContainer>
      <TransparentOverlay/>
      <PatternOverlay/>
      <Content>
        <Title>О Нас</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ea, est fuga nisi non vel vero. Amet aspernatur at atque autem beatae consectetur culpa cumque distinctio doloribus, id impedit ipsa iure iusto magni maiores maxime modi molestias mollitia nesciunt nobis nulla obcaecati odit officia officiis pariatur porro quis quisquam quod recusandae tenetur totam unde voluptas voluptate? Aperiam autem consequuntur eum facere fugit magni minima minus non officiis qui. Aperiam dolorum, et facere illo obcaecati possimus quod repellendus repudiandae sunt unde!</Text>
        <SectionDivider/>
      </Content>

      <ShopList/>
    </SectionContainer>
  };
}

export default AboutSection;
