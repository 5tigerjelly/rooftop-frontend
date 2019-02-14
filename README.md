[![Build Status](https://travis-ci.com/5tigerjelly/rooftop-frontend.svg?token=ZYVcj449Qv2V2qKnvuLm&branch=master)](https://travis-ci.com/5tigerjelly/rooftop-frontend)

# rooftop-frontend

Landing page for rooftop.city

## Codebase

This website was made using a simple template. There is no complicated framework used, just simple html, css, js.

## Deployment

Commit to master and you are done!

This repo uses Travis-CI to deploy directly to AWS S3 bucket. All changes in master will be deployed.
The S3 bucket is behind a cloudfront distribution as the content delivery network(CDN). The DNS then maps the `A record` to the CDN distribution alias.

## SSL Certificate

The certificate is created and managed in AWS Certificate Manager.

## Domain

The domain was purchased using AWS Route 53. The `.city` top level domain costs \$19 per year.
