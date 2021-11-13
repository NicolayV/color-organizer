import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import Navigation from "../components/ui/Navigation";
import Header from "../components/ui/Header";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 3rem 1rem;
  overflow-y: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const Layout = () => {
  console.log("Layout render");
  return (
    <>
      <HeaderBar>
        <Header />
      </HeaderBar>
      <Wrapper>
        <Navigation />
      </Wrapper>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
