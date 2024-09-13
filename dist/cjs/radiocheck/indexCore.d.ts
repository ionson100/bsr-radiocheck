import React, { Component, CSSProperties, ReactElement } from "react";
export type PropsRadioCheck = {
    id?: string;
    className?: string;
    style?: CSSProperties;
    styleWrapper?: CSSProperties;
    styleLabel?: CSSProperties;
    labelContent?: string | ReactElement;
    onChange?: (target: HTMLInputElement, checked: boolean) => void;
    checked?: boolean;
    type?: 'checkbox' | 'radio' | undefined;
    dataUser?: string | undefined;
    position?: 'left' | 'right';
    name?: string;
};
export default class RadioCheck extends Component<PropsRadioCheck, any> {
    private readonly mRefCheckBox;
    constructor(props: Readonly<PropsRadioCheck>);
    get Checked(): boolean;
    set Checked(value: boolean);
    componentDidMount(): void;
    private renderLabelLeft;
    private renderLabelRight;
    GetInput(): HTMLInputElement | null;
    render(): React.JSX.Element;
    private innerChange;
}
