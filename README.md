# ContestNotifier
This is a Google chrome extension which is a one stop solution for checking and notifying you about all the upcoming contests in different categories.
![2 (2)](https://user-images.githubusercontent.com/76156666/209067494-f7536028-eec0-43ac-a3d9-1af7ec8d132e.png)               ![3 (2)](https://user-images.githubusercontent.com/76156666/209067532-4aad04d9-cfec-4c4b-8494-cc237ae63a0a.png)



## What it does?
It fetches all the upcoming contest details from the Kontest api (https://www.kontests.net/api) .Currently the time is in IST only. It Shows a list of live & upcoming coding contests taking place in various popular competitive programming websites with the facility to add them to your google calender. Currently shows updates from Codechef , HackerEarth , Hackerrank, Topcoder and Codeforces etc.

## Features

- Visit contest.
- Google Calendar Integration.
- Subscription.

## TechStack:
 1. HTML
 2. CSS
 3. Javascript
 4. React.JS
 5. Bootstrap
 6. Material UI
 
## Building locally
To install the dependencies, run
``` 
npm install 
```
from inside this directory.  
  
To run the extension, first run
```
npm run build
```
This will compile the react code inside `app/` to `build/chrome`.

### Installing in Chrome
 1. Open extensions tab in Chrome, turn developer mode on
 2. Select `Load unpacked extensions`
 3. Load the `build/chrome` folder


