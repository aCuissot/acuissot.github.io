import argparse
import os

import cv2 as cv

possible_extension = [".jpg", ".png"]


def get_extension(filename):
    _, ext = os.path.splitext(filename)
    return ext


def sort(imgList):
    extSize = len(get_extension(imgList[0]))
    beginIndex = imgList[0].index('-')
    tmp = []
    for i in imgList:
        tmp.append((i, int(i[beginIndex + 1:-extSize])))
    tmp = sorted(tmp, key=lambda tup: tup[1])
    return [f[0] for f in tmp]


ap = argparse.ArgumentParser()
ap.add_argument("-i", "--input", required=True,
                help="path to input directory containing the images")
ap.add_argument("-p", "--prefix", default="",
                help="prefix images from capture should have, to let the other ones if there is")
ap.add_argument("-o", "--output", required=True,
                help="path to output video file")
ap.add_argument("-l", "--lenght", type=int, default=5,
                help="lenght of output video (in s)")
ap.add_argument("-c", "--codec", type=str, default="MJPG",
                help="codec of output video")
args = vars(ap.parse_args())

pathIn = args["input"]
name_prefix = args["prefix"]
# /!\ don't give a name containing '-' or adapt the script!
if name_prefix != "":
    imagesIn = [f for f in os.listdir(pathIn) if
                (os.path.isfile(os.path.join(pathIn, f)) and
                 f.split('-')[0] == name_prefix and
                 get_extension(os.path.join(pathIn, f)) in possible_extension)]
else:
    imagesIn = [f for f in os.listdir(pathIn) if
                (os.path.isfile(os.path.join(pathIn, f)) and
                 get_extension(os.path.join(pathIn, f)) in possible_extension)]

imagesIn = sort(imagesIn)
# Define the codec and create VideoWriter object
fourcc = cv.VideoWriter_fourcc(*args["codec"])
# fourcc = cv.VideoWriter_fourcc(*'XVID')  # => .avi
# We will suppose that the resolution is the same for all images and is the wanted video
# resolution so we don't have to resize images
lenght, width, _ = cv.imread(os.path.join(pathIn, imagesIn[0])).shape
print(width, lenght)
out = cv.VideoWriter(args["output"], fourcc, len(imagesIn)/args["lenght"], (width, lenght))

for imageIn in imagesIn:
    # print(imageIn)
    frame = cv.imread(os.path.join(pathIn, imageIn))
    # frame = cv.resize(frame, (width, lenght))
    out.write(frame)

# Release everything if job is finished
out.release()
