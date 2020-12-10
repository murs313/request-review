# request-review
This action requests review.

## Usage
```
- name: Request review
  uses: murs313/request-review@v1.2
  with:
    # Github token. Requied.
    token: ${{ secrets.GITHUB_TOKEN }}
    # Reviewers to add, in space separated list.
    # default: `github.actor`
    reviewers: 'foo bar'
    # Pull request's number to request review.
    # default: `github.context.payload.pull_request.number`
    pull-request-number: 1
```

## Inputs

| Name | Description | Default |
| --- | --- | --- |
| `token` | `GITHUB_TOKEN` or a `repo` scoped [PAT](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). | none |
| `reviewers` | Reviewers to add, in space separated list. | `github.actor` |
| `pull-request-number` | Pull request's number to request review. | `github.context.payload.pull_request.number` |

## Outputs
None
