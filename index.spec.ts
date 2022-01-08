import { resolve } from 'path';
import listRecursive from '.';

describe('Recursively list files given directory', () => {
  // list all files in files folder
  it('Should list 8 files', () => {
    const dirPath = resolve(__dirname, 'files');
    const files = listRecursive({ dirPath });
    expect(files.length).toBe(8);
  });

  // filter to ignore .txt files
  it('Should ignore .txt files', () => {
    const dirPath = resolve(__dirname, 'files');
    const files = listRecursive({ dirPath, ignorePattern: /\.txt$/ });
    expect(files.length).toBe(3);
  });

  // filter to ignore .json, .xlsx, & .txt files
  it('Should ignore .json, .xlsx, & .txt files', () => {
    const dirPath = resolve(__dirname, 'files');
    const files = listRecursive({ dirPath, ignorePattern: /(\.txt|\.json|\.xlsx)$/ });
    expect(files.length).toBe(1);
  });
});
