import React from 'react'
import { useRouter } from 'next/router';

export default function Slug() {

    // write code for slug

    const router = useRouter()
    const { slug } = router.query


  return (
    <div>[slug]</div>
  )
}
