import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Get In Touch',
  description: 'Contact Replan Cargo for all your shipping inquiries and assistance needs. Find our contact information and get in touch with our dedicated team to help you with your shipping from the USA to Kenya.',
}

 export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}