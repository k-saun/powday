#!/bin/bash
#export PATH="/home/ec2-user/.nvm/versions/node/v14.13.0/bin:$PATH";
cd /home/ubuntu/live_files/react-front;
#npm config set registry http://registry.npmjs.org/;
npm install react;
npm install react-dom;
npm run build;
