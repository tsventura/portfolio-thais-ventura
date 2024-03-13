import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
`;
const LogoText = styled.h1`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
`;
const MenuHeader = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
`;
const MenuLink = styled.a`
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 05px;
  text-decoration: none;

  &:hover {
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    color: #000;
  }
`;
const IconContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-end;
  align-items: center;
`;

const IconeLink = styled.a`               
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: #000;
    text-decoration: none;
`;

const GithubIcon = styled(Github)`
    width: 25px;
    height:  25px;
    stroke-width: 1px;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`;
const LinkedinIcon = styled(Linkedin)`
    width: 25px;
    height:  25px;
    stroke-width: 1px;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText>{"THAIS VENTURA"}</LogoText>
      </LogoContainer>
      <MenuHeader>
        <MenuLink href="/about">Sobre</MenuLink>
        <MenuLink href="/contact">Projetos</MenuLink>
      </MenuHeader>
      <IconContainer>
        <IconeLink href='https://github.com/thaispng'><GithubIcon/></IconeLink>
        <IconeLink href='https://www.linkedin.com/in/sstv/'><LinkedinIcon/></IconeLink>
      </IconContainer>
    </HeaderContainer>
  );
};
export default Header;
