sh 'docker run -d -p 8081:80 employee-form'
pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/your-username/employee-form.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t employee-form .'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker run -d -p 8080:80 employee-form'
      }
    }
  }
}
