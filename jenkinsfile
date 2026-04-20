pipeline {
    agent any

    stages {
        stage('Check SonarScanner Installation') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScanner'
                    echo "SonarScanner is located at: ${scannerHome}"
                    
                    // Vérification de la version du scanner
                    bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -v"
                }
            }
        }

        stage('Checkout from GitHub') {
            steps {
                script {
                    // Force l'utilisation de 'main' si la variable d'environnement n'est pas définie
                    def branchName = env.BRANCH_NAME ?: 'main'
                    echo "Cloning branch: ${branchName}"

                    git branch: branchName, url: 'https://github.com/HammamiSalmen/DevOps.git'
                }
            }
        }

        stage('Analyse SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'MySonarScanner'
                    
                    // 'Projet' doit correspondre exactement au nom dans "Configure System"
                    withSonarQubeEnv('Projet') {
                        withCredentials([string(credentialsId: 'sonarqube', variable: 'TOKEN')]) {
                            bat """
                            "${scannerHome}\\bin\\sonar-scanner.bat" ^
                            -Dsonar.projectKey=node-projetcid ^
                            -Dsonar.sources=. ^
                            -Dsonar.token=%TOKEN% ^
                            -Dsonar.projectVersion=1.0.0 ^
                            -Dsonar.sourceEncoding=UTF-8
                            """
                        }
                    }
                }
            }
        }
    }
}