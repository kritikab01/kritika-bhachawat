pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kritikab01/kritika-bhachawat.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build --up -d'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step (Kubernetes, Docker Compose, etc.)'
            }
        }
    }
}
