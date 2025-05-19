'use client'

import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient' // Adjust path if needed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from('contacts').insert([
      {
        name: formData.name,
        email: formData.email,
        expertise: formData.expertise,
        created_at: new Date().toISOString()
      }
    ])

    if (error) {
      console.error('❌ Supabase insert error:', error)
      alert('Submission failed. Please try again.')
    } else {
      alert('✅ Application submitted successfully!')
      setFormData({ name: '', email: '', expertise: '' })
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Join the Network</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-600 max-w-md">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border p-2 rounded-lg"
          required
        />
        <textarea
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          placeholder="Tell us about your expertise"
          className="border p-2 rounded-lg"
          required
        />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  )
}