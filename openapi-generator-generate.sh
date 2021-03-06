rm -rf api model
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i https://raw.githubusercontent.com/gr4vy/gr4vy-openapi/sdks/openapi.v1.json \
  -g typescript-node \
  --git-user-id gr4vy \
  --git-repo-id gr4vy-node-sdk \
  --enable-post-process-file \
  -o /local \
  -c /local/.openapi-generator-config.json