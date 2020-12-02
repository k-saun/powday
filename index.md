## Overview

[PowDay](http://34.220.197.65/) website is a helpful place for skiers and like-minded people. It allows users to easily see the snow depth at their favorite resorts to plan their trips. 

It is a simple user friendly page with only essential information and straightforward user interface.

### Inspiration

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

## Usage
- To access the production website, visit http://34.220.197.65/
- To build and host an instance of the website, first run
```$ npm run build ```within the **react-front/** directory, followed by
```$ python app.py ```within the **flask-back/** directory
 
## Architecture

PowDay was hosted on AWS EC2 instances with Continuous Deployment managed by CodePipelines. Flask was used to serve the web content to clients and handle the back end in Python. React was used to handle the front end, mainly because of its modular nature. The map component was provided by Mapbox, a service that makes creating and using maps very simple.

## Authors

- Nikita Kramar
- Eric Peterson
- Keegan Saunders
