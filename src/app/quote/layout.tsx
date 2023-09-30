import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Get A Quote',
  description: 'Request a shipping quote from Replan Cargo for your packages from the USA to Kenya. Get competitive rates and transparent pricing for your shipping needs.',
}

 export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}