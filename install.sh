#!/bin/bash
cd /home/ec2-user/live_files/react-front;
npm config set registry http://registry.npmjs.org/;
npm install react;
npm install react-dom;
npm install run build;
cd /home/ec2-user/live_files/flask-back;
python3 /home/ec2-user/live_files/flask-back/app.py &
exit 0;
