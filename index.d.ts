interface IListArguments {
    dirPath: string;
    ignorePattern?: RegExp;
}
/**
 * Recursively list files in directory path.
 * Pass ignore, a regex pattern to ignore all files that match.
 */
declare const recursivelyListFilesInDirectory: (opts: IListArguments) => string[];
export default recursivelyListFilesInDirectory;
