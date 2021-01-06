#!/bin/bash

# Default values
path=$HOME"/Videos/MyCaptures"
mkdir -p $path
maxTime=3
name="mycapture"
doThePythonProcess=false
extension=".jpg"

# Get the options flags
while getopts t:p:f:F:P option
do
case "${option}"
in
t) maxTime=${OPTARG};;
p) path=${OPTARG};;
f) name=${OPTARG};;
F) extension="."${OPTARG};;
P) doThePythonProcess=true;;
esac
done

start=$SECONDS
count=1
while ((maxTime > ((SECONDS - start))));
do gnome-screenshot -f $path"/"$name"-"$count$extension;
count=$(($count+1));
done

if $doThePythonProcess
then python script.py -i $path -p $name -o $name".mp4" -l $((SECONDS-start))
fi
