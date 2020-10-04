#!/bin/bash
cd /home/ubuntu/live_files;
cd react-front;
npm install react;
npm install react-dom;
npm install run build;
cd ..;
cd flask-back;
pwd;
python3 app.py &
exit 0;
