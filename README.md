# Titler
<img src="http://i.imgur.com/mIAUMN2.jpg">

# Running
You may need to download and install [PhantomJS](http://phantomjs.org/) before using.
```sh
$ npm install # Install Dependencies
$ npm start   # Generate Screenshot in build directory
```

# Changing Stuffs
* Edit the src/index.html file to have the copy you want shown
* Edit the config object in `screenshot.js`

# Notes
* Phantom.js doesn't seem to do font aliasing well, so it's nowhere near as crisp as it is when you open it up in a browser. Looking for a solution to this, so you may need to just screenshot + photoshop the resulting image :(
