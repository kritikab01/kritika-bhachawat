pipeline {
    agent any

    environment {
        PROJECT_NAME = 'kritikabhachawatme'
    }

    options {
        timestamps()
        ansiColor('xterm')
    }

    stages {
        stage('Docker Info') {
            steps {
                sh 'docker --version'
                sh 'docker compose version || docker-compose --version'
                sh 'docker system df'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kritikab01/kritika-bhachawat.git'
            }
        }

       stage('Cleanup Old Containers') {
            steps {
                sh 'docker compose down --remove-orphans || true'
                sh "docker container prune -f || true"
                sh "docker volume prune -f || true"
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build --pull --parallel'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d --remove-orphans'
            }
        }
    }

    post {
        always {
            echo "🧹 Cleaning up dangling images and unused build cache..."
            sh 'docker image prune -af || true'
            sh 'docker builder prune -af || true'
        }
        success {
            echo "✅ Deployment successful: $PROJECT_NAME"
        }
        failure {
            echo "❌ Deployment failed. Check logs above."
        }
    }
}
