const checkUrl = url => {
  if (!/^(f|ht)tps?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  return url;
};

export default checkUrl;
