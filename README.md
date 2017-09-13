# Dokkio

This project demonstrates how to automate functional test using WebDriverIO with Node.js, Mocha.js and Javascript. It also Babel to transpile javascript code to ES6 format.

How to run the test:
- Install Firefox browser if it's not already installed.
- Install the latest version of Node.js
- Make a new directory in local system. for example, "mkdir drivers"
- CD into the new directory.  "cd drivers"
- Download latest selenium standalone server.  "curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar"
- Download the latest version geckodriver for your environment and unpack it in your project directory. "curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz"
- Start the server by executing the following:
"java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar"
- Open a new terminal window. 
- Make a new directory
- CD into the new directory
- Download the project source code from github. "git clone https://github.com/achung2018/dokkio.git"
- CD into the downloaded project directory
- Do "npm install" to install all the dependencies specified in the package.json
- After the dependencies are installed, there should be a directory "node_modules" present with all the packages in the directory- To run the test, go to the root directory of the project where file "wdio.conf.js" resides. Then do "./node_modules/.bin/wdio wdio.conf.js"
