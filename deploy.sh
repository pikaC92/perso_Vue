# Update
git pull
# Stop and remove existing container
docker stop vue-app-mande-container
docker rm vue-app-mande-container
# Remove existing image
docker image rm vue-app-mande
# Create image
docker build . -t vue-app-mande
# Create container
docker run -d --name vue-app-mande-container -p 8080:8080 vue-app-mande

