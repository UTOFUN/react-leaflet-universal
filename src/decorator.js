import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import get from "lodash.get";

const { node, oneOfType, func } = PropTypes;

export default function decorate(componentName) {
	const displayName = `LeafletUniv${componentName}`;

	class Decorated extends Component {
		constructor(props) {
			super(props);
			this.state = { loaded: false };
			this.constructor.displayName = displayName;
		}

		componentDidMount() {
			this.setState(() => ({ loaded: true }));
			this.ClientComponent = get(require('react-leaflet'), componentName);
		}

		render() {
			if (!this.state.loaded) return null;

			const { ClientComponent } = this;
			const { children, leafletRef, ...rest } = this.props;
			const childComponents = typeof children === 'function' ? children() : children;

			return (
				<ClientComponent {...rest} ref={leafletRef}>
					{ childComponents }
				</ClientComponent>
			);
		}
	}

	Decorated.displayName = displayName;
	Decorated.propTypes = {
		children: oneOfType([node, func]),
		leafletRef: func
	};

	return Decorated;
}
