// Library: Converter Functions
export function bytesToMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export function secondsToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${minutes}:${secs}`;
}

export function jsonToString(obj) {
  return JSON.stringify(obj, null, 2);
}

export function stringToJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

export function base64Encode(str) {
  return Buffer.from(str).toString('base64');
}

export function base64Decode(str) {
  return Buffer.from(str, 'base64').toString('utf-8');
}
