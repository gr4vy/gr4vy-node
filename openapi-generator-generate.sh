docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/openapi.v1.json \
  -g typescript-node \
  --git-user-id gr4vy \
  --git-repo-id gr4vy-node-sdk \
  --enable-post-process-file \
  -o /local \
  -c /local/.openapi-generator-config.json