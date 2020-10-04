#!/bin/bash
cd /home/ubuntu/live_files/react-front;
npm install react;
npm install react-dom;
npm install run build;
cd /home/ubuntu/live_files/flask-back;
pwd;
python3 /home/ubuntu/live_files/flask-back/app.py &
exit 0;
