/**
 * This HOC contains all action creators and store's data to send via props to MapContainer.
 *
 * @format
 */

import MapContainer from './MapContainer';
import createHOC from '../../utils/hocCreator';

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

export default createHOC(MapContainer, mapStateToProps, mapDispatchToProps);
