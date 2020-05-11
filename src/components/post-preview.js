import React from 'react'
import { Link } from 'gatsby'

import styles from './post.module.css'
import { linkBtn } from '../components/link.module.css'

export default function PostPreview({ post }) {
  return (
    <div className="p-4 shadow-lg bg-gray-700 text-gray-100 rounded-sm mb-3">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-xl">
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h2>
        <div className="uppercase text-xs">{post.frontmatter.date}</div>
      </div>
      <p className="mb-4">{post.excerpt}</p>
      <Link
        className="uppercase text-xs bg-gray-100 px-2 py-1 text-gray-700 rounded-full inline-block"
        to={post.fields.slug}
      >
        Read more
      </Link>
    </div>
  )
}
