export const type = (target) => {
  const template = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Number]': 'number-object',
    '[object String]': 'string-object',
  };
  if (target === null) {
    return 'null';
  }
  if (typeof target === 'object') {
    const str = Object.prototype.toString.call(target);
    return template[str];
  }
  return typeof target;
};
export const returnData = (parameter) => {
  let data = '';
  switch (type(parameter)) {
    case 'number':
    case 'string':
    case 'object':
    case 'array':
      data = parameter;
      break;
    case 'function':
      data = parameter();
      break;
    default:
      break;
  }
  return data;
};
