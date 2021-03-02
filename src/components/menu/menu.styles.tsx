import styled from 'styled-components';

type MenuWrapperProps = {
  isVisible: boolean;
};

export const MenuWrapper = styled.div<MenuWrapperProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: 180px;
  padding: 8px 12px;
  color: rgb(55, 53, 47);
  font-size: 0.9rem;
  border: solid 1px rgb(220, 220, 220);
  border-radius: 3px;
`;
