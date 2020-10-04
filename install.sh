#!/bin/bash
cd /home/ec2-user/live_files;
cd react-front;
/home/ec2-user/.nvm/versions/node/v14.13.0/bin/npm install react;
/home/ec2-user/.nvm/versions/node/v14.13.0/bin/npm install react-dom;
/home/ec2-user/.nvm/versions/node/v14.13.0/bin/npm install run build;
cd ..;
cd flask-back;
python3 app.py &
exit 0;
