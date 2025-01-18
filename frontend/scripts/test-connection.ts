import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dryluaztyuofappqaqkp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeWx1YXp0eXVvZmFwcHFhcWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNTY3MDMsImV4cCI6MjA1MjczMjcwM30.qADmrPQocw3VLr6sfI9KiebhAdHJPYNmIex8fK4L9ec'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    const { data, error } = await supabase.from('users').select('*')
    if (error) throw error
    console.log('Connection successful!')
    console.log('Data:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}

testConnection() 