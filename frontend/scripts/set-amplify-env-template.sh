#!/bin/bash

# Template for setting Amplify environment variables
# DO NOT add sensitive values to this file - it's just a template

# Amplify app ID - you can find this in your Amplify Console
APP_ID="your-app-id"

# Required environment variables
REQUIRED_VARS=(
  "NEXT_PUBLIC_SUPABASE_URL"
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
)

echo "To set these variables in Amplify Console:"
echo "1. Go to AWS Amplify Console"
echo "2. Select your app"
echo "3. Go to 'Environment Variables'"
echo "4. Add each variable with its corresponding value"

# Example of how to set variables (DO NOT USE - just for reference)
# aws amplify update-app \
#   --app-id $APP_ID \
#   --environment-variables \
#   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url" \
#   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key" 