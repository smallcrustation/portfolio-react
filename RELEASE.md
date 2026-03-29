# Release process

This project follows [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`).

1. Update `CHANGELOG.md` with a dated section for the new version (Added / Changed / Fixed).
2. Bump `version` in `package.json` to the new tag (for example `1.1.0`).
3. Run `npm install` (if dependencies changed), then `npm run build`, `npm test`, and `npm run lint` locally.
4. Commit and push; open a PR if required by your workflow.
5. Tag the release in Git: `git tag v1.1.0 && git push origin v1.1.0` (adjust version).
6. Publish or deploy using your hosting provider (static build output is in `dist/` after `npm run build`).

Pre-releases may use identifiers such as `1.2.0-beta.1` in `package.json` and git tags.
