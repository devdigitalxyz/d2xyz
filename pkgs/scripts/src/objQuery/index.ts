type ObjectType = {
  [x: string]: string | number;
};

/**
 * ObjToQueryType
 */
type ObjToQueryType = <T>(obj: T | ObjectType) => string;

/**
 * objToQuery
 */
export const objToQuery: ObjToQueryType = (obj) => {
  let str = '?';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.entries(obj).forEach((entry) => {
    if (entry[1]) {
      str += `${entry[0]}=${entry[1]}&`;
    }
  });

  str = str.substring(0, str.length - 1);

  return str;
};

/**
 * QueryToObjType
 */
type QueryToObjType = (str: string) => ObjectType;

/**
 * queryToObj
 */
export const queryToObj: QueryToObjType = (str) => {
  const obj: ObjectType = {};

  const newStr = str.startsWith('?') ? str.substring(1, str.length) : str;

  newStr.split('&').forEach((propStr) => {
    const prop = propStr.split('=');
    const [key, value] = prop;
    obj[key] = value;
  });

  return obj;
};
