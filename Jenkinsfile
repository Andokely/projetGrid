pipeline {
    agent any
    
    stages {
        stage('Pull sfsdfdsf') {
            steps {
                sh 'cd projetGrid && git pull'
            }
        }
        stage('Build') {
            steps {
                sh 'cd projetGrid && docker build -t imageGrid .'
            }
        }
        stage('Push') {
            steps {
                sh 'cd projetGrid && docker login -u andokely -p ait8lac9*'
                sh 'cd projetGrid && docker push andokely/react'
            }
        }
        stage('Deploy') {
            steps {
                withKubeConfig([credentialsId: '1', serverUrl: 'https://cluster-url']) {
                    sh 'cd projetGrid && kubectl apply -f deployment.yaml --validate=false'
                    sh 'cd projetGrid && kubectl apply -f service.yaml --validate=false'
                }
            }
        }
    }
}