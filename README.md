 # docker images 
  - (for viewing the images present )

 # docker ps 
  - (gives you the containers which are currently running)
 
# docker kill <container-id>
 - (kills the container you want to kill)

# to build docker image
 - docker build -t mydock .
 - ( -t is the tag name , you can give the version to it as well )
 - ( . is the path of file which you want to build where is it)

# To remove an image 
 - docker rmi <image_name>


#  to run
  - docker run -d -p 3000:3000 mydock 
 -  (-p gives the port of the system you want to listen and connects with the - 3000 port of the container )
 - ( -d detaches the process from the terminal )

# to push to docker hub
 - docker push imsanc/practice_docker:tagname
- (this pushes it to docker hub and tagname should be of image you want to push)

- docker containers are isolated therefore if we have to map the local port to docker port

- Volume is used for persistence of data (suppose you are testing a container/project when you kill the container the data also goes with it therefore we need persistence for doing that we use volume)

# To create a volume
 - docker volume create volume_database
 - ( this creates a volume , <volume_database> is the name of the volume)

# to mount volume on the DB instance
 - docker run -v volume_database:/data/db -p 27017:27017 mongo
 - ( it runs the docker attaches the volume to the /data/db -- < -v volume_database:/data/db > 
 it attaches the port -p 27017:27017 system port to container mongo port
)
# docker volume ls
 (gives all the running volumes present on the system)


# docker volume rm volume_database
 - it removes the volume database    

# Network

## To create a network 
- docker network create <network_name>

# To list down the networks running
- docker network ls

# To attach containers to a network 
- docker run -p 3000:3000 --network <network_name> --name <name_your_container> <container_to_run>

# Environment Variables
 - how to give env variable in docker
 docker run -p 3000:3000 -e MONGO_URI = monogo <Image_name>

  - how to use env variable in js
  process.env.MONGO_URI

# Adding scripts 
 - we can add scripts in our package.json -> in scripts we can add example :
 \`` "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node index.js",
    "dev" : "nodemon index.js"
  }, \`  

  here \``npm run start is\` equavalient to node index.js and similarly for \``npm run dev\` wil run it in nodemon

- nodemon keeps eye on index.js and reloads the project if anything changes
