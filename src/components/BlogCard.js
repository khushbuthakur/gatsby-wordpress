import React from 'react'
import parse from "html-react-parser"
import { Link, graphql } from "gatsby"

function BlogCard({title, date, excerpt, uri}) {
    return (
        <div 
            class="shadow-sm max-w-xs w-full px-6 py-8 text-black bg-white"
            itemScope
            itemType="http://schema.org/Article"
        >
            <h2 class="text-lg">{parse(title)}</h2>

            <div class="flex space-x-2 items-center">
                    {/* <i data-feather="calendar" class="w-4 h-4"></i> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-calendar w-8 h-8 stroke-1"
                        viewBox="0 0 24 24"
                        >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <path d="M16 2L16 6"></path>
                        <path d="M8 2L8 6"></path>
                        <path d="M3 10L21 10"></path>
                    </svg>
                    <p class="text-sm font-bold">{date}</p>
            </div>

            <p class="mt-2 text-sm">{parse(excerpt)}</p>
            <div class="mt-8 flex items-center">
            <Link to={uri} itemProp="url" class="btn btn-sm text-white bg-red-600 hover:bg-red-800">
                View
            </Link>
            </div>
        </div>
    )
}

export default BlogCard;