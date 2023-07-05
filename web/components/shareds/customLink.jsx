import React, { ReactNode, Children, ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'


const CustomLink=({ href, children, ...props }) =>{
  const { asPath } = useRouter() 
  const className = href === asPath ? `activeLink` : null

  return (
    <Link href={href} {...props} className={className}>    
      {children}
    </Link>
  )
}

export default CustomLink