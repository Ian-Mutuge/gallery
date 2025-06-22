pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Git branch') {
            steps {
                git branch:'master',url:"https://github.com/Ian-Mutuge/gallery"
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploying to render') {
            steps {
                sh 'curl https://api.render.com/deploy/srv-d1bu2v15pdvs73e8f760?key=mPRZ7QqAzAY'
            }
        }
        
        }
    }

