import decorate from './decorator';
import set from "lodash.set";

const COMPONENTS = [
	'AttributionControl',
	'Circle',
	'CircleMarker',
	'ControlledLayer',
	'DivOverlay',
	'FeatureGroup',
	'GeoJSON',
	'GridLayer',
	'ImageOverlay',
	'LayerGroup',
	'LayersControl',
	'LayersControl.BaseLayer',
	'LayersControl.Overlay',
	'Map',
	'MapComponent',
	'MapControl',
	'MapEvented',
	'MapLayer',
	'Marker',
	'Pane',
	'Path',
	'Polygon',
	'Polyline',
	'Popup',
	'Rectangle',
	'ScaleControl',
	'TileLayer',
	'Tooltip',
	'VideoOverlay',
	'WMSTileLayer',
	'ZoomControl'
];

const COMPONENT_MAP = COMPONENTS.reduce((map, name) => {
	return set(map, name, decorate(name));
}, {});

module.exports = COMPONENT_MAP;
