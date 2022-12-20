# ContestNotifier
This is a Google chrome extension which is a one stop solution for checking and notifying you about all the upcoming contests in different categories.
![1 (2)](https://user-images.githubusercontent.com/76156666/208752183-da612da3-0294-41eb-8879-cd6ff6b5448e.png)

![2 (2)](https://user-images.githubusercontent.com/76156666/208752238-3aa70965-64e0-4bc8-b5ef-7ca6c6322949.png)

![3 (2)](https://user-images.githubusercontent.com/76156666/208752250-ce7a1d19-a69a-4295-a5b9-22d7c77e0ab8.png)

![4 (2)](https://user-images.githubusercontent.com/76156666/208752259-4fc59d71-5896-4692-940d-e23304203c7b.png)



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


