import { execFile, exec } from 'child_process';

export async function testFileExecCmd(filePath: string) {
  try {
    // eslint-disable-next-line no-console
    console.log('FILE RAN at path:', filePath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function executeFile(file: string) {
  execFile(file, (error, stdout, stderr) => {
    try {
      // eslint-disable-next-line no-console
      console.log('executeCmd', stdout);
    } catch (err) {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      if (stderr) {
        // eslint-disable-next-line no-console
        console.log(stderr);
      }
    }
  });
}

export function executeCmd(
  command: string,
  callback?: (stdout: string) => void | null
) {
  exec(command, (error, stdout, stderr) => {
    try {
      if (callback) {
        callback(stdout);
      }
    } catch (err) {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      if (stderr) {
        // eslint-disable-next-line no-console
        console.log(stderr);
      }
    }
  });
}
