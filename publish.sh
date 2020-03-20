#! /bin/bash

npm run build

scp -r //Users/Bingo/Development/OneZeroBeat/Product/CraftTime/Coronavirus/Proj/CoronavirusStatistics/dist/* root@www.onezerobeat.com://opt/crafttime/coronavirus
