rm -rf api model
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli:v7.6.0 generate \
  -i https://gr4vy.github.io/openapi/openapi.sdks.v1.json \
  -g typescript-node \
  --git-user-id gr4vy \
  --git-repo-id gr4vy-node \
  --enable-post-process-file \
  -o /local \
  -c /local/.openapi-generator-config.json
