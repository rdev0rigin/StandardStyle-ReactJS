import { ReactElement } from 'react';
import * as React from 'react';
import { RGBColor } from 'react-color';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

interface ButtonComponentProps {

}

interface ButtonComponentState {
	buttonBackgroundColor: string;
	// buttonBorderColor: string;
}

export const ButtonsComponent = (props: {buttonBackgroundColor: string}): ReactElement<HTMLDivElement> => {
	return (
		<div
			className="buttons-component"
		>
			<button
				className="btn btn-lg"
				style={{
					background: props.buttonBackgroundColor
				}}
			>
				Large
			</button>
			<button
				className="btn btn-sm"
				style={{
					background: props.buttonBackgroundColor
				}}
			>
				Small
			</button>
		</div>
	);
};

export class ButtonComponent extends React.Component<ButtonComponentProps, ButtonComponentState> {
	public state = {
		buttonBackgroundColor: '#a1cfff'
	};
	
	constructor(public props: ButtonComponentProps) {
		super(props);
		this.hexHandler = this.hexHandler.bind(this);
	}
	
	public render() {
		return(
			<div
				className="button-component"
			>
				<h1>Buttons</h1>
				<div
					className="color-picker-wrapper"
					key={'color-picker'}
				>
					<ColorPickerComponent
						hex={this.state.buttonBackgroundColor}
						hexHandler={this.hexHandler}
						rgbHandler={this.rgbHandler}
					/>
				</div>
				<ButtonsComponent
					key={'button-component'}
					buttonBackgroundColor={this.state.buttonBackgroundColor}
				/>
			</div>
		);
	}
	
	private rgbHandler(rgb: RGBColor): void {
		console.log(rgb);
	}
	
	private hexHandler(hex: string): void {
		this.setState({
			buttonBackgroundColor: hex
		});
	}
}
