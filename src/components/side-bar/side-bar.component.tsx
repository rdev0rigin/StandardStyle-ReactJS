import * as React from 'react';
import {
	Link
} from 'react-router-dom';

export const NavigationLinks = (props: {links: {}[]}) => {
	return (
		<div
			className="navigation-links"
		>
			{props.links.map( (link: {title: string, route: string} ) => {
				return (
					<React.Fragment
						key={link.title}
					>
						<Link
							to={link.route}
							className="navigation-links"
						>
							{link.title}
						</Link>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export const SideBarComponent = () => {
	return (
		<div
			className="side-bar-component"
		>
			<NavigationLinks
				links={[{title: 'Button', route: 'button'}, {title: 'Background', route: 'background'}]}
			/>
		</div>
	);
};
