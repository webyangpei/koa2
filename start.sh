#! /bin/bash

git fetch -p

git pull origin master

pm2 restart koa2
