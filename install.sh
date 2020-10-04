#!/bin/bash
cd /home/ec2-user/live_files;
cd react-front;
npm config set registry http://registry.npmjs.org/;
npm install react;
npm install react-dom;
npm install run build;
cd ..;
cd flask-back;
python3 app.py &
exit 0;
