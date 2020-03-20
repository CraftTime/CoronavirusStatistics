#! /bin/bash

npm run build

scp -r //Users/Bingo/Development/OneZeroBeat/Self/Website/OneZeroBeatWebsite/dist/* root@www.onezerobeat.com://opt/onezerobeat/OneZeroBeatWebSite
