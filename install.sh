#!/bin/bash
cd /home/ec2-user/live_files;
cd react-front;
npm install react;
npm install react-dom;
npm run build;
cd ..;
cd flask-back;
nohup python3 app.py;
exit 0;
