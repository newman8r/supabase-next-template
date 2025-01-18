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
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F7] via-[#4A90E2]/10 to-[#F7F3E3] p-6">
      <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-[#E0F2F7]/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#2C5282]">
          ZenBreeze AI Tool
        </h1>
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl text-center">
            Connection Status: {' '}
            {isConnected === null ? (
              'Checking...'
            ) : isConnected ? (
              <span className="text-[#FF7676] font-semibold">Connected</span>
            ) : (
              <span className="text-red-500">Not Connected</span>
            )}
          </div>
          <div className="text-lg text-[#4A90E2]">
            Users in database: {users.length}
          </div>
          <button className="px-6 py-3 bg-[#4A90E2] text-white rounded-full hover:bg-[#2C5282] transition-colors duration-300 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
} 