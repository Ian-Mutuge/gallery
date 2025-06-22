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
        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Send emails') {
            steps {
               mail (body: 'For some reason the pipeline has failed', subject: 'Jenkins Pipeline Status', to: 'mvtuge@gmail.com')
            }
        }
        stage('Deploying to render') {
            steps {
                sh 'curl https://api.render.com/deploy/srv-d1bu2v15pdvs73e8f760?key=mPRZ7QqAzAY'
            }
        }
        
        }
    }





