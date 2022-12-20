# ContestNotifier
This is a Google chrome extension which is a one stop solution for checking and notifying you about all the upcoming contests in different categories.

## What it does?
It fetches all the upcoming contest details from the Kontest api .Currently the time is in IST only. It Shows a list of live & upcoming coding contests taking place in various popular competitive programming websites with the facility to add them to your google calender. Currently shows updates from Codechef , HackerEarth , Hackerrank, Topcoder and Codeforces etc.

## Building locally
To install the dependencies, run

npm install 
from inside this directory.

To run the extension, first run

npm run build
This will compile the react code inside app/ to build/chrome & build/firefox respectievely.

### Installing in Chrome
1. Open chrome://extensions in a new tab
2. Select Load unpacked extensions
3. Load the build/chrome folder
