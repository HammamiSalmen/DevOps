pipeline {
agent any

stages {
stage('Check SonarScanner Installation') {
steps {
script {
def scannerHome = tool 'MySonarScanner' // nom défini dans "Global Tool Configuration"
echo "SonarScanner should be installed at: ${scannerHome}"

// Vérifie la présence du scanner
bat "dir \"${scannerHome}\\bin\\sonar-scanner.bat\""
bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -v"
}
}
}

stage('Checkout GitHub') {
steps {
script {
def branchName = env.BRANCH_NAME ?: 'master'
echo "Branche détectée : ${branchName}"

checkout([
$class: 'GitSCM',
branches: [[name: "*/${branchName}"]],
userRemoteConfigs: [[
url: 'https://github.com/HammamiSalmen/DevOps.git'
]]
])
}
}
}

stage('Analyse SonarQube') {
steps {
script {
def scannerHome = tool 'MySonarScanner'
withSonarQubeEnv('projet') {
withCredentials([string(credentialsId: 'sonarqube', variable: 'TOKEN')]) {
bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" " +
"-Dsonar.projectKey=node-projetcid " +
"-Dsonar.sources=. " +
"-Dsonar.login=%TOKEN% " +
"-Dsonar.projectVersion=1.0.0 " +
"-Dsonar.sourceEncoding=UTF-8"
}
}
}
}
}
}
}