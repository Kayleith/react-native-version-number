/* @flow */

import { NativeModules } from 'react-native';

const { RNVersionNumber } = NativeModules;

type VersionObject = {
  appVersion: ?string,
  buildVersion: ?string,
  bundleIdentifier: ?string,
  basestationAppVersion: ?string,
  basestationBuildVersion: ?string,
  basestationBundleIdentifier: ?string
};

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber && RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber && RNVersionNumber.buildVersion,
  bundleIdentifier: RNVersionNumber && RNVersionNumber.bundleIdentifier,
  basestationAppVersion: RNVersionNumber && RNVersionNumber.basestationAppVersion,
  basestationBuildVersion: RNVersionNumber && RNVersionNumber.basestationBuildVersion,
  basestationBundleIdentifier: RNVersionNumber && RNVersionNumber.basestationBundleIdentifier
};

export default VersionNumber;
