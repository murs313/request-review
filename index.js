const core = require('@actions/core');
const github = require('@actions/github');

try {
  const token = process.env["GITHUB_TOKEN"] || core.getInput("token");
  const octokit = new github.getOctokit(token);
  const githubContext = github.context;
  const numberOfPullRequest = core.getInput('number-of-pull-request');

  console.log(numberOfPullRequest);
  console.log(`Hello ${numberOfPullRequest}!`);

  octokit.pulls.requestReviewers({
    ...githubContext.repo,
    pull_number: numberOfPullRequest,
    reviewers: githubContext.actor,
  });
} catch (error) {
  core.setFailed(error.message);
}
