import React from 'react'

import EachUtils from '@/utils/EachUtils'
import { Badge } from '@/components/ui/badge'
import { LIST_ARTICLE } from '@/constants/listArticle'

const ArticleSection = () => {
    return (
        <section className="relative py-14 sm:py-24">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4f46e5] to-[#3b82f6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Berita dan Cerita Terbaru</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Ikuti perjalanan kami dalam menyebarkan kebaikan melalui berbagai program dan inisiatif.</p>
                </div>

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <EachUtils
                        of={LIST_ARTICLE}
                        render={(item, index) => (
                            <article key={index} className="group flex max-w-xl flex-col items-start justify-between cursor-pointer">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={item.datetime} className="text-gray-500">
                                        {item.date}
                                    </time>
                                    <Badge className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 group-hover:bg-gray-100">
                                        {item.category.title}
                                    </Badge>
                                </div>

                                <div className="relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={item.href}>
                                        <span className="absolute inset-0" />
                                        {item.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{item.description}</p>
                                </div>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img alt="" src={item.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                        <a href={item.author.href}>
                                            <span className="absolute inset-0" />
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
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#3b82f6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </section>
    )
}

export default ArticleSection