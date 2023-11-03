rm -rf api model
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli:v5.1.1 generate \
  -i https://gr4vy.github.io/gr4vy-openapi/openapi.sdks.v1.json \
  -g typescript-node \
  --git-user-id gr4vy \
  --git-repo-id gr4vy-node \
  --enable-post-process-file \
  -o /local \
  -c /local/.openapi-generator-config.json
