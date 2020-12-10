const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const numberOfPullRequest = core.getInput('number-of-pull-request');
  console.log(numberOfPullRequest);
  console.log(`Hello ${numberOfPullRequest}!`);
} catch (error) {
  core.setFailed(error.message);
}
