pipeline {
    agent any

    environment {
        PROJECT_NAME = "kritikabhachawatme"
    }

    stages {
        stage('Docker Version') {
            steps {
                sh 'docker --version'
                sh 'docker compose version || docker-compose --version'
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kritikab01/kritika-bhachawat.git'
            }
        }

        stage('Cleanup Old Containers') {
            steps {
                // Stop and remove old containers, but don’t fail if none exist
                sh 'docker compose down --remove-orphans || true'
                sh "docker image prune -f || true"
            }
        }

        stage('Build with Cache') {
            steps {
                // Reuse cached layers to speed up builds
                sh 'docker compose build --pull'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Cleaning up dangling images..."
            sh 'docker image prune -f || true'
        }
        success {
            echo "✅ Deployment successful: $PROJECT_NAME"
        }
        failure {
            echo "❌ Deployment failed. Check logs above."
        }
    }
}
