export function formatDate(_date:string|Date|undefined, format:string = 'YYYY.MM.DD') {
  const date = _date ? new Date(_date) : new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formatMap: { [key: string]: string } = {
    YYYY: year.toString(),
    YY: year.toString().slice(-2),
    MM: month,
    DD: day,
    HH: hours,
    hh: hours,
    mm: minutes,
    ss: seconds
  };

  return format.replace(/YYYY|YY|MM|DD|HH|hh|mm|ss/g, match => formatMap[match]);
}