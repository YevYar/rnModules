/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'Warning: Failed prop type: The prop `camera.altitude`'
]);

AppRegistry.registerComponent(appName, () => App);
