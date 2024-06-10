Steps to Set Up and Deploy
Set up Docker and Kubernetes: Ensure Docker and Kubernetes are installed and configured on your system.
Clone Repositories: Clone your frontend and backend repositories into the frontend and backend directories respectively.
Build Docker Images:
Navigate to the frontend directory and build the Docker image: docker build -t deeeye2/devops-bot-frontend .
Navigate to the backend directory and build the Docker image: docker build -t deeeye2/devops-bot-backend .
Push Docker Images to Docker Hub:
Use docker push deeeye2/devops-bot-frontend
Use docker push deeeye2/devops-bot-backend
Deploy to Kubernetes:
Apply the Kubernetes manifests: kubectl apply -f kubernetes/
Run Cleanup Script:
Use the cleanup.sh script to clean up Docker resources before each build.
Set Up CI/CD with Jenkins:
Use the provided Jenkinsfile to set up CI/CD pipelines in Jenkins.
This structure and these instructions should help you get your project set up and running smoothly.
