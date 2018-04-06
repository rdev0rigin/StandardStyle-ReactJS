import * as firebase from 'firebase';
import * as React from 'react';
import { RGBColor } from 'react-color';
import { Subscription } from '@reactivex/rxjs';
import { onDatabaseUpdate$, setToDatabase } from '../../services/firebase.service';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

interface ButtonComponentProps {

}

interface ButtonComponentState {
	buttonBackgroundColor: string;
	rgba: RGBColor;
}

export const ButtonsComponent = (props: {buttonBackgroundColor: string}): React.ReactElement<HTMLDivElement> => {
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
		buttonBackgroundColor: '#a1cfff',
		rgba: {r: 0, g: 0, b: 0, a: 1}
	};
	private subscribers: Subscription;
	
	constructor(public props: ButtonComponentProps) {
		super(props);
		this.hexHandler = this.hexHandler.bind(this);
		this.rgbHandler = this.rgbHandler.bind(this);
	}
	
	public componentDidMount(): void {
		this.subscribers = onDatabaseUpdate$()
			.distinctUntilChanged()
			.subscribe( (snapShot: firebase.database.DataSnapshot) => {
				console.log('57 SnapShot', (snapShot.val()));
			});
	}
	
	public componentWillUnmount(): void {
		this.subscribers.unsubscribe();
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
						rgba={this.state.rgba}
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
		setToDatabase('button-color-rgba', rgb);
		this.setState({
			rgba: rgb,
			buttonBackgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a}`
		});
	}
	
	private hexHandler(hex: string): void {
		setToDatabase('button-color-hex', hex);
		// this.setState({
		// 	buttonBackgroundColor: hex
		// });
	}
}
