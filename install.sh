#!/bin/bash
cd /home/ec2-user/live_files;
cd react-front;
/root/.nvm/versions/node/v14.13.0/bin/npm install react;
/root/.nvm/versions/node/v14.13.0/bin/npm install react-dom;
/root/.nvm/versions/node/v14.13.0/bin/npm run build;
cd ..;
cd flask-back;
nohup python3 app.py &
exit 0;
