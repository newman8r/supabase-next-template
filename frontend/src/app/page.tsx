'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import AuthPanel from '@/components/auth/AuthPanel'
import { useUser } from '@/contexts/UserContext'

interface User {
  id: string
  email: string
  created_at: string
  updated_at: string
}

export default function Home() {
  const { user, loading: userLoading } = useUser()
  const [isConnected, setIsConnected] = useState<boolean | null>(null)
  const [users, setUsers] = useState<User[]>([])

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

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2F7] via-[#4A90E2]/10 to-[#F7F3E3] p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-[#E0F2F7]/20">
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
            {!userLoading && (
              <div className="text-lg text-[#4A90E2]">
                {user ? (
                  <>
                    <p>Welcome, {user.email}</p>
                    <button
                      onClick={handleSignOut}
                      className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 mt-4"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <p>Please sign in to continue</p>
                )}
              </div>
            )}
          </div>
        </div>

        {!user && <AuthPanel />}

        {user && (
          <div className="ocean-card mt-6">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <div className="text-lg text-[#4A90E2]">
              Users in database: {users.length}
            </div>
            <button className="wave-button w-full mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 