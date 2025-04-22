def isWindows = isUnix() == false

if (isWindows) {
    bat 'docker stop employee-form || exit 0'
    bat 'docker rm employee-form || exit 0'
} else {
    sh 'docker stop employee-form || true'
    sh 'docker rm employee-form || true'
}
