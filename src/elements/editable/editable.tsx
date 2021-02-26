import React, { KeyboardEvent, ReactNode } from 'react';

import { setCaretPosition } from '../../utils';

import { EditableWrapper } from './editable.styles';

type EditableProps = {
  value: string;
  placeholder: string;

  onInput: (value: string) => void;
  onKeyDown: (evt: KeyboardEvent) => void;
};

export class Editable extends React.Component<EditableProps> {
  private elementRef = React.createRef<HTMLDivElement>();

  hasContent = (): boolean => {
    if (!this.elementRef.current) {
      return false;
    }

    const element = this.elementRef.current;
    const currentText = element.innerText.replace('\n', '');

    if (!currentText || currentText === this.props.placeholder) {
      return false;
    }

    return true;
  };

  setCaretAtStart = (): void => {
    if (!this.elementRef.current) {
      return;
    }

    if (!this.hasContent()) {
      setCaretPosition(this.elementRef.current, 0);
    }
  };

  shouldComponentUpdate = (newProps: EditableProps): boolean => {
    if (!this.elementRef.current) {
      return false;
    }

    const element = this.elementRef.current;

    if (!this.hasContent()) {
      return true;
    }

    if (element.innerHTML !== newProps.value) {
      return true;
    }

    return false;
  };

  componentDidUpdate = (): void => {
    if (!this.elementRef.current) {
      return;
    }

    if (this.hasContent()) {
      const element = this.elementRef.current;
      const currentText = element.innerText.replace('\n', '');

      setCaretPosition(this.elementRef.current, currentText.length);
    }
  };

  handleOnInput = (): void => {
    if (!this.elementRef.current) {
      return;
    }

    const element = this.elementRef.current;
    let currentValue = element.innerHTML;

    if (!this.hasContent()) {
      currentValue = '';
    } else if (this.hasContent() && !this.props.value) {
      currentValue = currentValue.replace(this.props.placeholder, '');
    }

    this.props.onInput(currentValue);
  };

  handleOnKeyDown = (evt: KeyboardEvent): void => {
    this.props.onKeyDown(evt);
  };

  handleOnFocus = (): void => {
    this.setCaretAtStart();
  };

  handleOnMouseUp = (): void => {
    this.setCaretAtStart();
  };

  render = (): ReactNode => {
    const { value, placeholder } = this.props;

    return (
      <EditableWrapper showPlaceholder={!value}>
        <div
          ref={this.elementRef}
          contentEditable={true}
          onInput={this.handleOnInput}
          onKeyDown={this.handleOnKeyDown}
          onFocus={this.handleOnFocus}
          onMouseUp={this.handleOnMouseUp}
          dangerouslySetInnerHTML={{ __html: !value ? placeholder : value }}
        ></div>
      </EditableWrapper>
    );
  };
}
