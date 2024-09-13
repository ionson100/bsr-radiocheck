import React, {Component, CSSProperties, ReactElement, useEffect} from "react";

export type PropsRadioCheck = {
    id?: string
    className?: string;
    style?: CSSProperties
    styleWrapper?: CSSProperties
    styleLabel?: CSSProperties
    labelContent?: string | ReactElement
    onChange?: (target: HTMLInputElement, checked: boolean) => void
    checked?: boolean
    type?: 'checkbox' | 'radio' | undefined;
    dataUser?: string | undefined
    position?: 'left' | 'right'
    name?: string
    value?:string
}


export default class RadioCheck extends Component<PropsRadioCheck, any> {
    private readonly mRefCheckBox: React.RefObject<HTMLInputElement>

    constructor(props: Readonly<PropsRadioCheck>) {
        super(props);
        this.mRefCheckBox = React.createRef<HTMLInputElement>()
        this.innerChange = this.innerChange.bind(this)
    }

    get Checked():boolean {
        return this.mRefCheckBox.current!.checked
    }

    set Checked(value: boolean) {
        this.mRefCheckBox.current!.checked = value
    }

    componentDidMount() {
        if (this.props.checked) {
            this.mRefCheckBox.current!.checked = true

        }
    }

    private renderLabelLeft() {
        const pos = this.props.position ?? "right"
        if (pos === 'left') {
            return <div className={'cb-bsr-label'} style={this.props.styleLabel}>{this.props.labelContent}</div>
        } else {
            return null
        }
    }

    private renderLabelRight() {
        const pos = this.props.position ?? "right"
        if (pos === 'right') {
            return <div className={'cb-bsr-label'} style={this.props.styleLabel}>{this.props.labelContent}</div>
        } else {
            return null
        }
    }

    public GetInput() {
        return this.mRefCheckBox.current
    }


    render() {

        return (
            <div

                className={'cb-bsr-wrapper'}
                style={this.props.styleWrapper}
                onMouseUp={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    const name = (e.target as HTMLElement).nodeName
                    if (name === 'INPUT') {
                        return
                    } else {

                        const bool = !this.mRefCheckBox.current!.checked;
                        this.mRefCheckBox.current!.checked = bool
                        if (this.props.onChange) {
                            this.props.onChange(this.mRefCheckBox.current!, bool)
                        }
                    }
                }}>
                {
                    this.renderLabelLeft()
                }
                <input


                    id={this.props.id}
                    onChange={this.innerChange}
                    ref={this.mRefCheckBox}
                    className={this.props.className}
                    data-bsr-check={this.props.dataUser}
                    value={this.props.value}
                    name={this.props.name}
                    style={this.props.style}
                    type={!this.props.type ? "checkbox" : this.props.type}/>
                {
                    this.renderLabelRight()
                }
            </div>

        );
    }

    private innerChange(event: React.ChangeEvent<HTMLInputElement>) {

        if (this.props.onChange) {
            this.props.onChange(this.mRefCheckBox.current!, event.target.checked)
        }
    }
}