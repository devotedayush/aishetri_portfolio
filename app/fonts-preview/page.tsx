import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Not Found',
  robots: { index: false },
}

export default function Page() {
  notFound()
}
