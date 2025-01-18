#!/bin/bash

# Set AWS profile
export AWS_PROFILE=gauntlet
export AWS_REGION=us-west-1

# Check if AWS CLI is configured
if ! aws configure list &> /dev/null; then
    echo "Error: AWS CLI is not configured properly for profile 'gauntlet'. Please check your credentials."
    exit 1
fi

# Amplify app ID for your application
APP_ID="d9xfvup5zqyo7"

# Get environment variables from user input (more secure than command line arguments)
echo "Enter the Supabase URL:"
read -r SUPABASE_URL

echo "Enter the Supabase Anonymous Key:"
read -r SUPABASE_ANON_KEY

# Create JSON string for environment variables
ENV_VARS="{\"NEXT_PUBLIC_SUPABASE_URL\":\"$SUPABASE_URL\",\"NEXT_PUBLIC_SUPABASE_ANON_KEY\":\"$SUPABASE_ANON_KEY\"}"

# Update Amplify app environment variables
echo "Setting environment variables in Amplify..."
aws amplify update-app \
    --app-id "$APP_ID" \
    --environment-variables "$ENV_VARS"

if [ $? -eq 0 ]; then
    echo "Successfully updated environment variables"
else
    echo "Failed to update environment variables"
    exit 1
fi 