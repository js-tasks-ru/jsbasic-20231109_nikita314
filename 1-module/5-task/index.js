function truncate(str, maxlength) {
master
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
  // ваш код...
master
}
