import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dwcxpfamdhcrkzpkqpll.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3Y3hwZmFtZGhjcmt6cGtxcGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MjIwMzgsImV4cCI6MjA2MjI5ODAzOH0.4ubZsdrgJz4zmFP142qVIp1tXn8W_8--piXBFL6hX5g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)