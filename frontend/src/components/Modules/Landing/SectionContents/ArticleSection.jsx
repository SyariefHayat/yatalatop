import React from 'react'

import EachUtils from '@/utils/EachUtils'
import { Badge } from '@/components/ui/badge'
import { LIST_ARTICLE } from '@/constants/listArticle'
import SectionLayout from '@/components/Layouts/SectionLayout'
import ClipPathUp from '../../Element/ClipPathUp'
import ClipPathDown from '../../Element/ClipPathDown'

const ArticleSection = () => {
    return (
        <SectionLayout label="Article Section">
            <ClipPathUp />

            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Berita dan Cerita Terbaru</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Ikuti perjalanan kami dalam menyebarkan kebaikan melalui berbagai program dan inisiatif.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <EachUtils
                    of={LIST_ARTICLE}
                    render={(item, index) => (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={item.datetime} className="text-gray-500">
                                    {item.date}
                                </time>
                                <Badge className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                                    {item.category.title}
                                </Badge>
                            </div>

                            <div>
                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
                                    <a href={item.href}>
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{item.description}</p>
                            </div>

                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={item.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                                <div className="text-sm/6">
                                    <p className="relative font-semibold text-gray-900">
                                        <a href={item.author.href} className="hover:underline">
                                            {item.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{item.author.role}</p>
                                </div>
                            </div>
                        </article>
                    )}
                />
            </div>

            <ClipPathDown />
        </SectionLayout>
    )
}

export default ArticleSection