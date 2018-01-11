import React from 'react';
import styled from 'styled-components';

import HeadScene from './../components/HeadScene';

const StyledContainer = styled.div`
  height: 100%;
  max-height: 350px;

  @media (min-width: 520px) {
    max-height: 400px;
  }

  @media (min-width: 1400px) {
    max-height: 500px;
  }
`;

class Index extends React.Component {
  render() {
    return (
      <StyledContainer>
        <HeadScene />
        {/* <h2>hi</h2> */}
      </StyledContainer>
    );
  }
}

export default Index;
