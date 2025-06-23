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
        stage('Run test') {
            steps {
                sh 'node server'
            }
        }
        
        post {
        
        failure {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'mvtuge@gmail.com'
        }
        }
        stage('Deploying to render') {
            steps {
                sh 'curl https://api.render.com/deploy/srv-d1bu2v15pdvs73e8f760?key=mPRZ7QqAzAY'
            }
        }
        stage('Send successful deployment message') {
            steps {
                slackSend channel: '#ian_ip1', message: 'Application has been deployed successfully'
            }
        
        }
    }
}




