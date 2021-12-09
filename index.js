/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route, { AppNavigator } from './Route';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
