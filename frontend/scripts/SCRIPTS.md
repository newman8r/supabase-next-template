# Frontend Scripts Documentation

This document describes the purpose and usage of scripts in the `frontend/scripts` directory.

## set-amplify-env-secure.sh

**Purpose**: This script securely configures environment variables for AWS Amplify deployment by setting up Supabase credentials.

### Features
- Uses AWS CLI with the 'gauntlet' profile
- Sets up environment variables for AWS Amplify application
- Securely prompts for Supabase credentials (URL and Anonymous Key)
- Updates Amplify app configuration with the provided credentials

### Prerequisites
- AWS CLI installed and configured with 'gauntlet' profile
- Access to AWS Amplify application (App ID: d9xfvup5zqyo7)
- Supabase project credentials

### Usage
1. Make the script executable:
   ```bash
   chmod +x set-amplify-env-secure.sh
   ```
2. Run the script:
   ```bash
   ./set-amplify-env-secure.sh
   ```
3. When prompted, enter:
   - Supabase URL
   - Supabase Anonymous Key

The script will then update the Amplify app's environment variables with these credentials.

### Security Notes
- Credentials are collected via secure command-line prompts rather than command-line arguments
- AWS credentials are managed through AWS CLI profiles
- Environment variables are updated directly in AWS Amplify's secure environment 