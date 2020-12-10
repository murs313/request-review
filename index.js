const core = require('@actions/core');
const github = require('@actions/github');

try {
  const token = process.env["GITHUB_TOKEN"] || core.getInput("token");
  const octokit = new github.getOctokit(token);
  const githubContext = github.context;

  const pullRequestNumber = core.getInput('pull-request-number');
  const reviewers = core.getInput('reviewers').split(" ") || [githubContext.actor];

  console.log(`Request review from ${reviewers}`);

  octokit.pulls.requestReviewers({
    ...githubContext.repo,
    pull_number: pullRequestNumber,
    reviewers: reviewers,
  });

  console.log(`Success!`);
} catch (error) {
  core.setFailed(error.message);
}
