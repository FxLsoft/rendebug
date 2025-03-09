rm -rf dist

webpack

cd dist
tar -zcvf rendebug-web.all.tar.gz *
scp rendebug-web.all.tar.gz web@192.168.20.34:fed/
rm -rf rendebug-web.all.tar.gz
ssh web@192.168.20.34 "sh ~/fed/deploy.sh rendebug-web"