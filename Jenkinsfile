pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'employee-form'
        CONTAINER_NAME = 'employee-form-container'
        HOST_PORT = '8080'
        CONTAINER_PORT = '80'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Guni27/employee-form.git', branch: 'main'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat '''
                docker stop %CONTAINER_NAME% || echo "No running container"
                docker rm %CONTAINER_NAME% || echo "No container to remove"
                '''
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p %HOST_PORT%:%CONTAINER_PORT% --name %CONTAINER_NAME% %DOCKER_IMAGE%'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check logs for details.'
        }
    }
}
