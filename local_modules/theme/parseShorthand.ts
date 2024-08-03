export function parseShorthand(styleValue: any): { top: string | number, right?: string | number, bottom?: string | number, left?: string | number } {
  if(typeof styleValue !== 'string') {
    return { top: styleValue, right: styleValue, bottom: styleValue, left: styleValue };
  }
  const styleValues = styleValue.split(' ').map(v => {
    if (v.endsWith('%')) {
      return v;
    } else {
      return parseFloat(v.replace(/[^0-9.]/g, ''));
    }
  })

  switch (styleValues.length) {
    case 1:
      return { top: styleValues[0], right: styleValues[0], bottom: styleValues[0], left: styleValues[0] };
    case 2:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[0], left: styleValues[1] };
    case 3:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[2], left: styleValues[1] };
    case 4:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[2], left: styleValues[3] };
    default:
      return { top: 0, right: 0, bottom: 0, left: 0 };
  }
}