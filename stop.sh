#!/bin/bash
rm -rf /home/ubuntu/live_files/*
kill -9 $(ps -ef | grep python | awk '{print $2}')
exit 0;
