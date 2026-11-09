pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t shoppingapp:latest -f dockerfile .'
            }
        }

        stage('Deploy Website') {
            steps {
                sh '''
                docker stop shoppingapp || true
                docker rm shoppingapp || true
                docker run -d --name shoppingapp -p 80:80 shoppingapp:latest
                '''
            }
        }
    }
}
