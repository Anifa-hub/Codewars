function humanReadable(seconds) {
  const hours = "0"+Math.floor(seconds / 3600);
     const minutes = "0"+Math.floor((seconds % 3600) / 60);
     const second = "0"+seconds % 60
  return hours.slice(-2) + ":" + minutes.slice(-2) + ":" + second.slice(-2);
}