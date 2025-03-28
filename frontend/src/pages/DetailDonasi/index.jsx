import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../Landing/Navbar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Footer from '@/components/Modules/Landing/Footer'
import { LIST_CAMPAIGN } from '@/constants/listCampaign'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DetailDonasi = () => {
    const { id } = useParams();
    const index = parseInt(id, 10);
    const campaign = LIST_CAMPAIGN[index];
    const [formatAmount, setFormatAmount] = useState("");

    const stats = [
        { id: 1, name: 'Target Pendanaan', value: '1.000.000' },
        { id: 2, name: 'Dana Terkumpul', value: '100.000' },
        { id: 3, name: 'Presentase', value: '10%' },
    ]

    const handleAmountChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ""); // Hanya angka
        setFormatAmount(rawValue ? `Rp ${parseInt(rawValue).toLocaleString("id-ID")}` : "Rp ");
        
        form.setValue("amount", rawValue);
    };

    return (
        <DefaultLayout>
            <Navbar position="relative" />
            <section className="overflow-hidden py-14 sm:py-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <article className="mx-auto max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <figure>
                            <img src={campaign.backgroundImage} alt={campaign.title} className="w-full h-full max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover object-center" />
                        </figure>
                        
                        <section className="lg:pt-4 lg:pr-8">
                            <footer className="relative my-8 flex items-center gap-x-4">
                                <img alt={campaign.author.name} src={campaign.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={campaign.author.href} className="hover:underline">
                                            {campaign.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{campaign.author.role}</p>
                                </div>
                            </footer>
                            <header className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">{campaign.title}</h2>
                            </header>
                            <p className="mt-6 text-lg/8 text-gray-600">{campaign.description}</p>
                            
                            {/* <Progress value={33} /> */}
                            <div className="bg-white my-8">
                                <div className="mx-auto max-w-7xl">
                                    <dl className="flex flex-wrap justify-between gap-8 text-center">
                                    {stats.map((stat) => (
                                        <div key={stat.id} className="flex flex-col items-center max-w-xs gap-y-4 border p-6 rounded-lg shadow-md">
                                        <dt className="text-base text-gray-600">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                                            {stat.value}
                                        </dd>
                                        </div>
                                    ))}
                                    </dl>
                                </div>
                                <div className="my-8">
                                    <Input
                                        type="text"
                                        value={formatAmount}
                                        onChange={handleAmountChange}
                                        placeholder="Masukkan nominal"
                                        className="py-5"
                                    />
                                    <Button className="w-full mt-5 cursor-pointer">
                                        Pilih Metode Pembayaran
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </article>

                    <Tabs defaultValue="campaign-story" className="w-full my-14">
                        <TabsList className="gap-4">
                            <TabsTrigger value="campaign-story">Cerita</TabsTrigger>
                            <TabsTrigger value="campaign-donation">Donasi</TabsTrigger>
                            <TabsTrigger value="campaign-pray">Doa Orang Baik</TabsTrigger>
                        </TabsList>

                        <TabsContent value="campaign-story" className="p-6 bg-white shadow-md rounded-lg mt-4">
                            <h2 className="text-xl font-semibold mb-2">Cerita Penggalangan Dana</h2>
                            <p>{campaign.description}</p>
                        </TabsContent>

                        <TabsContent value="campaign-donation" className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <div className="flex items-center gap-x-4 shadow-md rounded-lg p-5 py-5">
                                <Avatar className="w-14 h-14">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        Orang Baik
                                    </p>
                                    <p>
                                        Berdonasi sebesar <span className="font-semibold text-gray-900">Rp 10.000</span>
                                    </p>
                                    <p className="text-gray-600">10 menit yang lalu</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-4 shadow-md rounded-lg p-5 py-5">
                                <Avatar className="w-14 h-14">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        Orang Baik
                                    </p>
                                    <p>
                                        Berdonasi sebesar <span className="font-semibold text-gray-900">Rp 5.000</span>
                                    </p>
                                    <p className="text-gray-600">1 jam yang lalu</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-4 shadow-md rounded-lg p-5 py-5">
                                <Avatar className="w-14 h-14">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="text-sm/6">
                                    <p className="font-semibold text-gray-900">
                                        Orang Baik
                                    </p>
                                    <p>
                                        Berdonasi sebesar <span className="font-semibold text-gray-900">Rp 20.000</span>
                                    </p>
                                    <p className="text-gray-600">1 hari yang lalu</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="campaign-pray" className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <div className="shadow-md rounded-lg p-5 py-5">
                                <div className="flex items-center gap-x-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            Orang Baik
                                        </p>
                                        <p className="text-gray-600">1 hari yang lalu</p>
                                    </div>
                                </div>

                                <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos numquam repellat reprehenderit reiciendis corporis, delectus ducimus eum aspernatur sed nobis illo repudiandae excepturi tempore debitis pariatur. Eaque, quae exercitationem.</p>
                            </div>

                            <div className="shadow-md rounded-lg p-5 py-5">
                                <div className="flex items-center gap-x-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            Orang Baik
                                        </p>
                                        <p className="text-gray-600">1 hari yang lalu</p>
                                    </div>
                                </div>

                                <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos numquam repellat reprehenderit reiciendis corporis, delectus ducimus eum aspernatur sed nobis illo repudiandae excepturi tempore debitis pariatur. Eaque, quae exercitationem.</p>
                            </div>

                            <div className="shadow-md rounded-lg p-5 py-5">
                                <div className="flex items-center gap-x-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            Orang Baik
                                        </p>
                                        <p className="text-gray-600">1 hari yang lalu</p>
                                    </div>
                                </div>

                                <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dignissimos numquam repellat reprehenderit reiciendis corporis, delectus ducimus eum aspernatur sed nobis illo repudiandae excepturi tempore debitis pariatur. Eaque, quae exercitationem.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            <Footer />
        </DefaultLayout>
    );
};

export default DetailDonasi;