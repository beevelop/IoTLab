var child_process = require('child_process');
var Travis = require('travis-ci');
var travis = new Travis({
    version: '2.0.0'
});

var failed = [];
var passed = [];
var interv = null;
travis.repos('beevelop').get(function (err, res) {
    var repos = res.repos;
    repos.forEach(function (repo) {
        if (repo.last_build_state === 'failed') {
            failed.push(repo);
        }

        if (repo.last_build_state === 'passed') {
            passed.push(repo);
        }
    });

    console.log('Failed: '+failed.length);
    console.log('Passed: '+passed.length);

    if (interv === null) {
        interv = setInterval(showRepos, 2000);
    }
});

var i = 0;
function showRepos() {
    var repos = failed.concat(passed);
    i = i + 1;

    showRepo(repos[i % repos.length]);
}

function showRepo(repo) {
    var repoName = repo.slug.split('/').slice(-1)[0];
    console.log(repo.last_build_state+': '+repoName);

    child_process.exec('./display "'+repoName+'"', function (err, stdout, stderr){
        if (err) {
            console.log("child processes failed with error code: " + err.code);
        }
        console.log(stdout);
    });
}
