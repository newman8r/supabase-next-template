# Deployment Guide

## Overview
This project is deployed using AWS Amplify with CloudFront and S3. The frontend is a static Next.js application that is built and deployed to S3, with CloudFront serving as the CDN.

## Prerequisites
- AWS CLI installed and configured with profile `gauntlet`
- Node.js and npm installed
- Amplify CLI installed (`npm install -g @aws-amplify/cli`)

## Project Configuration
- **App Name**: zenbreeze
- **Environment**: dev
- **Distribution URL**: https://do2y0u8pyxvic.cloudfront.net
- **S3 Bucket**: zenbreeze-20250117223650-hostingbucket-dev
- **CloudFront Distribution ID**: E2BLT641TVRPVQ

## Initial Setup
If you need to set up the project on a new machine:

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm ci
   ```
4. Pull the existing Amplify environment:
   ```bash
   amplify pull
   ```

## Project Structure
- `frontend/` - Next.js application
- `frontend/out/` - Static build output directory
- `frontend/amplify/` - Amplify configuration files

## Deployment Process

### Standard Deployment
To deploy updates to the application:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Run the publish command:
   ```bash
   amplify publish
   ```

This will:
- Build the Next.js application
- Upload the files to S3
- Invalidate the CloudFront cache
- Deploy your changes to https://do2y0u8pyxvic.cloudfront.net

### Manual Deployment (if needed)
If you need to manually deploy the files:

1. Build the application:
   ```bash
   npm run build
   ```

2. Sync the files to S3:
   ```bash
   aws s3 sync out/ s3://zenbreeze-20250117223650-hostingbucket-dev/ --profile gauntlet
   ```

3. Invalidate CloudFront cache:
   ```bash
   aws cloudfront create-invalidation --distribution-id E2BLT641TVRPVQ --paths "/*" --profile gauntlet
   ```

## Troubleshooting

### ACL Issues
If you encounter ACL-related errors during deployment:

1. Update bucket ownership controls:
   ```bash
   aws s3api put-bucket-ownership-controls \
     --bucket zenbreeze-20250117223650-hostingbucket-dev \
     --ownership-controls="Rules=[{ObjectOwnership=BucketOwnerPreferred}]" \
     --profile gauntlet
   ```

2. Configure public access settings:
   ```bash
   aws s3api put-public-access-block \
     --bucket zenbreeze-20250117223650-hostingbucket-dev \
     --public-access-block-configuration \
     "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
     --profile gauntlet
   ```

### CloudFront Issues
If changes aren't reflecting:

1. Check the CloudFront distribution status
2. Create a manual invalidation:
   ```bash
   aws cloudfront create-invalidation --distribution-id E2BLT641TVRPVQ --paths "/*" --profile gauntlet
   ```

### Build Issues
If you encounter build issues:

1. Clean the build directories:
   ```bash
   rm -rf .next out
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm ci
   ```

## Important Notes
- The project uses CloudFront with S3 for hosting, configured for HTTPS
- All routes are configured to return `index.html` for SPA support
- The distribution directory is set to `out/` for Next.js static export
- The project uses the AWS profile `gauntlet` for all AWS CLI commands

## Monitoring and Logs
- CloudFront distribution logs can be viewed in the AWS Console
- S3 bucket metrics are available in CloudWatch
- Build and deployment logs are available in the Amplify Console

## Security
- HTTPS is enforced via CloudFront
- S3 bucket is not publicly accessible; all access is through CloudFront
- Origin Access Control (OAC) is used for CloudFront to S3 access 