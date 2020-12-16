# request-review
This action requests review. You can set pull request number.

## Usage
```
- name: Request review
  uses: murs313/request-review@v1.5
  with:
    # Github token.
    token: ${{ secrets.GITHUB_TOKEN }}
    # Reviewers to add, in space separated list.
    reviewers: 'foo bar'
    # Pull request's number to request review.
    pull-request-number: 1
```

## Inputs

| Name | Description | Default |
| --- | --- | --- |
| `token` | `GITHUB_TOKEN` | None |
| `reviewers` | Reviewers to add, in space separated list. | None |
| `pull-request-number` | Pull request's number to request review. | `github.context.payload.pull_request.number` |

## Outputs
None
