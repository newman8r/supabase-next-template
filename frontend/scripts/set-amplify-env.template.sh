#!/bin/bash

# Get the app ID from amplify-meta.json
APP_ID="your_app_id"

# Set environment variables
aws amplify update-app \
  --app-id $APP_ID \
  --environment-variables "{\"NEXT_PUBLIC_SUPABASE_URL\":\"your_supabase_url\",\"NEXT_PUBLIC_SUPABASE_ANON_KEY\":\"your_supabase_anon_key\"}" 