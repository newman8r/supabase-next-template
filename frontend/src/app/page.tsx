'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from('users').select('*')
        if (error) throw error
        setIsConnected(true)
        setUsers(data || [])
      } catch (error) {
        console.error('Error:', error)
        setIsConnected(false)
      }
    }

    checkConnection()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Supabase + Next.js Demo</h1>
      <div className="text-xl mb-4">
        Connection Status: {' '}
        {isConnected === null ? (
          'Checking...'
        ) : isConnected ? (
          <span className="text-green-500">Connected</span>
        ) : (
          <span className="text-red-500">Not Connected</span>
        )}
      </div>
      <div className="text-lg">
        Users in database: {users.length}
      </div>
    </main>
  )
} 