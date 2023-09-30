import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our transparent pricing, real-time tracking, and timely delivery options.',
}

 export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}