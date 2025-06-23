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
        stage('Send successful deployment message') {
            steps {
                slackSend channel: '#ian_ip1', message: 'Build' $BUILD_ID 'was successful. The application has been deployed successfully on the url https://gallery-zt5r.onrender.com/'
            }
        
        }
    }
}




