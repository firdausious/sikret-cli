import fs from 'fs'

export const writeFile = (outputFile: string, data: any) => {
  fs.writeFile(
    outputFile,
    data,
    'utf8',
    function (err: any) {
      if (err) {
        console.error('Error write the output', err);
        throw new Error(err)
      }
    },
  );
}

const isCamelCase = (str: string) => {
  return !!str.match(/^[a-z]+[A-Z]/)
}

const camelToSnakeCase = (str: string) => {
  if ( isCamelCase(str) ) {
    return str.replace(/[A-Z]/g, '\_$&')
  }

  return str
}

export const formatToDotenv = (obj: any, key: string = '') => {
  let exportString = ''

  if (typeof obj == 'string') {
    exportString += '' + camelToSnakeCase(key).toUpperCase() + '="' + obj + '"\n';
  } else {
    for (var k in obj) {
      if (typeof obj[k] == 'string') {
        var prefix = key ? key.toUpperCase() + '_' : '';
        exportString += '' + prefix + camelToSnakeCase(k).toUpperCase() + '="' + obj[k] + '"\n';
      } else if ( typeof obj[k] == 'object' ) {
        formatToDotenv(obj[k], k);
      }
    }
  }

  return exportString
}

