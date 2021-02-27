import styled from 'styled-components';

type MenuWrapperProps = {
  isVisible: boolean;
};

export const MenuWrapper = styled.div<MenuWrapperProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: 180px;
  color: rgb(55, 53, 47);
  font-size: 0.9rem;
`;
