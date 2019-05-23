import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';
import styled from 'styled-components';
import nyc from '../assets/nyc.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${nyc}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome</h1>
        <p>Search for your dream jobs in NYC</p>
      </Container>
    </Jumbo>
  </Styles>
)