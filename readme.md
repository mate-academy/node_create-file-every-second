# Create a file every second
Implement an app that creates 1 file every 1 second in the current directory (where the script is located).
- File name must be in the following format: `app-<hours>_<minutes>_<seconds>.log`.
- File content must be a timestamp of this operation.
- The app must print to console timestamp and newly created file name when it completes file creation successfully.
- The app must run forever until you terminate the process.

## Notes
- Time should be in the standard format: `14:05:01`. If the hours, minutes, and seconds are less than `10`, there must be `0` as the first digit.
