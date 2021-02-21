import styled from 'styled-components';

type EditableWrapperProps = {
  showPlaceholder: boolean;
};

export const EditableWrapper = styled.div<EditableWrapperProps>`
  > * {
    padding: 6px;
    color: ${(props) => (props.showPlaceholder ? '#888888' : 'default')};
  }
`;
