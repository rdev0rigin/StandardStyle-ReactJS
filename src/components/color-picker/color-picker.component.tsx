import * as React from 'react';
import { RGBColor } from 'react-color';
import SketchPicker from 'react-color/lib/components/sketch/Sketch';

interface ColorPickerComponentProps {
	rgbHandler: (color: RGBColor) => void;
	hexHandler: (hex: string) => void;
	// hex?: string;
	rgba: RGBColor;
}

export const ColorPickerComponent = (props: ColorPickerComponentProps) => {
	console.log('color picker rendering');
	return (
		<SketchPicker
			color={props.rgba}
			onChangeComplete={({rgb, hex}) => {
				props.hexHandler(hex);
				props.rgbHandler(rgb);
			}}
		/>
	);
};
