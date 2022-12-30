import { v4 as uuidv4 } from 'uuid';
import { parseCookies, setCookie } from 'nookies';
import { deviceDetect, browserName, deviceType } from 'react-device-detect';

const setDetectedDevices = () => {
  const devices = deviceDetect();

  const cookies = parseCookies();

  const { _dit } = cookies;

  const setUUID = uuidv4();

  if (!_dit) {
    setCookie(null, '_dit', setUUID, {
      path: '/',
    });
  }

  const deviceWebDetail =
    devices.osName +
    '/' +
    devices.osVersion +
    ' ' +
    deviceType +
    ' ' +
    browserName +
    '/' +
    devices.browserFullVersion +
    ' ' +
    devices.engineName +
    '/' +
    devices.engineVersion;

  const deviceMobileDetail =
    browserName +
    ' ' +
    devices.model +
    ' ' +
    deviceType +
    ' ' +
    devices.vendor +
    ' ' +
    devices.os +
    '/' +
    devices.osVersion;

  const DetectedTypeDevices = () => {
    if (devices.isBrowser) {
      return deviceWebDetail;
    } else if (devices.isMobile) {
      return deviceMobileDetail;
    } else {
      return `Undefined type not found, Please Deleted!`;
    }
  };

  return { deviceId: _dit, deviceTypes: DetectedTypeDevices() };
};

export default setDetectedDevices;
