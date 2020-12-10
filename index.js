const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const numberOfPullRequest = core.getInput('number-of-pull-request');
  console.log(numberOfPullRequest);
  console.log(`Hello ${numberOfPullRequest}!`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
