import originJSONP from 'jsonp';

function param(data) {
  const url = '';
  for (const k in data) {
    const value = data[k] !== undefined ? data[k] : '';
    url.concat(`&${k}=${encodeURIComponent(value)}`);
  }
  return url ? url.substring(1) : '';
}

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, d) => {
      if (!err) {
        resolve(d);
      } else {
        reject(err);
      }
    });
  });
}
