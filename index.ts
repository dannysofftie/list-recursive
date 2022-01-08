import * as fs from 'fs';

interface IListArguments {
  dirPath: string;
  ignorePattern?: RegExp;
}

/**
 * Recursively list files in directory path.
 * Pass ignore, a regex pattern to ignore all files that match.
 */
const recursivelyListFilesInDirectory = (opts: IListArguments): string[] => {
  if (!opts.dirPath) return [];
  const dirExists = fs.existsSync(opts.dirPath);
  if (!dirExists) return [];
  const files = [];
  const lookForFiles = (subFolderPath = '') => {
    const currentDirectory = fs.readdirSync(subFolderPath);
    for (const filePath of currentDirectory) {
      const stat = fs.lstatSync(`${subFolderPath}/${filePath}`);
      if (stat.isDirectory()) {
        lookForFiles(`${subFolderPath}/${filePath}`);
      } else {
        if (opts.ignorePattern && !filePath.match(opts.ignorePattern)) files.push(`${subFolderPath}/${filePath}`);
        else if (!opts.ignorePattern) files.push(`${subFolderPath}/${filePath}`);
      }
    }
  };
  lookForFiles(opts.dirPath);
  // remove empty file names
  return files.filter(Boolean);
};

export default recursivelyListFilesInDirectory;
