- to build docker image
  docker build -t mydock .
( -t is the tag name , you can give the version to it as well )
( . is the path of file which you want to build where is it)

- to run
 docker run -d -p 3000:3000 mydock 
 (-p gives the port of the system you want to listen and connects with the 3000 port of the container )
 ( -d detaches the process from the terminal )
