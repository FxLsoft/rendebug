 tar -zcvf rendebug.all.tar.gz bin server gulpfile.js package.json
 scp rendebug.all.tar.gz web@192.168.20.34:fed/
 rm -rf rendebug.all.tar.gz
 ssh web@192.168.20.34 "sh ~/fed/deploy.sh rendebug"