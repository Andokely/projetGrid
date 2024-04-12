pipeline {
    agent any
    
    stages {
        stage('Pull be ty') {
            steps {
                sh 'cd projetGrid && git pull'
            }
        }
        stage('Build') {
            steps {
                bat 'cd projetGrid && docker build -t imageGrid .'
            }
        }
        stage('Push') {
            steps {
                bat 'cd projetGrid && docker login -u andokely -p ait8lac9*'
                bat 'cd projetGrid && docker push andokely/react'
            }
        }
        stage('Deploy') {
            steps {
                withKubeConfig([credentialsId: '1', serverUrl: 'https://cluster-url']) {
                    bat 'cd projetGrid && kubectl apply -f deployment.yaml --validate=false'
                    bat 'cd projetGrid && kubectl apply -f service.yaml --validate=false'
                }
            }
        }
    }
}