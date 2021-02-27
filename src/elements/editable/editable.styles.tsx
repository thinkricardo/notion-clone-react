import styled from 'styled-components';

type EditableWrapperProps = {
  hasPlaceholder: boolean;
};

export const EditableWrapper = styled.div<EditableWrapperProps>`
  > * {
    padding: 6px;
    color: ${(props) => (props.hasPlaceholder ? '#888888' : 'inherit')};
  }
`;
