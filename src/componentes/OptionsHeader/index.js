import React from 'react';
import styled from 'styled-components';

const OptionHeader = styled.ul`
    display: flex;
`;

const ListHeader = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

const ImgHeader = styled.img``;

function OptionsHeader({ icons, textOptions }) {
  return (
    <OptionHeader>
      {icons && icons.length > 0 && icons.map((IconComponent, index) => (
        <ListHeader>
          <ImgHeader src={IconComponent} />
        </ListHeader>
      ))}
      {textOptions && textOptions.length > 0 && textOptions.map((item, index) => (
        <ListHeader>
          <p>{item}</p>
        </ListHeader>
      ))}    </OptionHeader>
  );
}

export default OptionsHeader;
