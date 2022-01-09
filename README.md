# List recursive

List directory contents, including sub-directories recursively with a dependency-free package.

## Installation

With yarn

```bash
yarn add list-recursive
```

Or with npm

```bash
npm install list-recursive
```

## Usage

### Example 1

With TypeScript, to get all file paths in the folder

```ts
import { resolve } from 'path';
import listRecursive from 'list-recursive';

const dirPath = resolve(__dirname, 'folder-name');
const files = listRecursive({ dirPath });
// files has absolute file paths for all files in the `folder-name` folder
```

### Example 3

With TypeScript and `ignorePattern` option, to ignore all files with `.txt` and `.json` extension,

```ts
import { resolve } from 'path';
import listRecursive from 'list-recursive';

const dirPath = resolve(__dirname, 'folder-name');
const files = listRecursive({ dirPath, ignorePattern: /(\.txt|\.json)$/ });
// files has absolute file paths for all files in the `folder-name` folder, ignoring `.txt` and `.json` extensions
```

## Sample Output

Given folder structure below,

```bash
files
├── file1.txt
├── file2.txt
├── file.json
├── sub-folder
│   ├── file3.txt
│   ├── file.doc
│   └── file.xlsx
└── sub-folder-2
    ├── file4.txt
    └── nested-folder
        └── file5.txt
```

This will be the output, with the full file path.

```bash
    [
      '/mnt/Projects/opensource/list-recursive/files/file.json',
      '/mnt/Projects/opensource/list-recursive/files/file1.txt',
      '/mnt/Projects/opensource/list-recursive/files/file2.txt',
      '/mnt/Projects/opensource/list-recursive/files/sub-folder/file.doc',
      '/mnt/Projects/opensource/list-recursive/files/sub-folder/file.xlsx',
      '/mnt/Projects/opensource/list-recursive/files/sub-folder/file3.txt',
      '/mnt/Projects/opensource/list-recursive/files/sub-folder-2/file4.txt',
      '/mnt/Projects/opensource/list-recursive/files/sub-folder-2/nested-folder/file5.txt'
    ]
```

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2022 [Danny Sofftie](https://github.com/dannysofftie)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
