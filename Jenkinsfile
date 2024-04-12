pipeline {
    agent any
    
    stages {
        stage('Pull') {
            steps {
                sh 'git pull origin main'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t imagegrid .'
            }
        }
        stage('Push') {
            steps {
                sh 'docker login -u andokely -p ait8lac9*'
                sh 'docker push andokely/imagegrid'
            }
        }
        stage('Deploy') {
           steps {
                withKubeConfig([credentialsId: '2', serverUrl: 'https://192.168.49.2:8443']) {
                    sh 'kubectl apply -f deployment.yaml --validate=false'
                }
            }
        }
    }
}