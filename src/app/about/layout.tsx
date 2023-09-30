import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About',
  description: 'Replan Cargo was founded to meet the needs of individuals and businesses looking for reliable, transparent, and affordable shipping services from the USA to Kenya. Discover how we offer competitive rates, real-time tracking, and timely delivery within 60 to 90 days.',
}

export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}