import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Check, Copy, Image, MessageCircle, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'

import Navbar from '../Landing/Navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Toggle } from "@/components/ui/toggle"
import { LIST_ARTICLE } from '@/constants/listArticle'
import Footer from '@/components/Modules/Landing/Footer'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Comment from '@/components/Modules/Landing/Comment'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const DetailArticle = () => {
    const { id } = useParams();
    const index = parseInt(id, 10);
    const article = LIST_ARTICLE[index];

    const [like, setLike] = useState(999);
    const [isLiked, setIsLiked] = useState(false);

    const [shareCount, setShareCount] = useState(39);
    const [copied, setCopied] = useState(false);

    const [isComment, setIsComment] = useState(false);
    
    const articleUrl = window.location.href;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);

            if (!copied) setShareCount(prev => prev + 1);
            setCopied(true);
        } catch (err) {
            console.error("Gagal menyalin link:", err);
        }
    };

    const handleToggleLike = () => {
        if (isLiked) {
            setLike((prev) => prev - 1);
        } else {
            setLike((prev) => prev + 1);
        }

        setIsLiked(!isLiked);
    };

    const formatNumber = (num) => {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " jt";
        } else if (num >= 1_000) {
            return (num / 1_000).toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " rb";
        }

        return num.toLocaleString("id-ID");
    };

    return (
        <DefaultLayout>
            <Navbar position={"relative"} />
            <section>
                <img src={`/slide-${index + 1}.png`} alt="" className="w-full h-screen object-cover object-center" />
                <div className="mx-auto my-12 flex flex-col gap-6 w-full h-full lg:w-4xl items-start px-6">
                    <div className="flex items-center gap-x-4">
                        <img 
                            alt={article.author.name} 
                            src={article.author.imageUrl} 
                            className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                        />
                        <div className="text-sm/6">
                            <p className="font-semibold text-gray-900 truncate">
                                <a href={article.author.href} className="hover:underline">{article.author.name}</a>
                            </p>
                            <div className="w-full flex items-center justify-center gap-3">
                                <p className="text-gray-600">{article.author.role}</p>
                                <p>.</p>
                                <p className="text-sm text-gray-600">29 Maret</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900">{article.title}</h2>

                    <Badge className="rounded-full px-3 py-1.5 font-medium">{article.category.title}</Badge>
                    
                    <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta culpa ipsum corrupti maxime eos iusto explicabo provident minima odit, sunt possimus. Commodi voluptate doloremque tempore repellat possimus esse laborum iusto.</p>

                    <p className="text-gray-600 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehenderit sunt itaque atque repellat libero explicabo nam facere quibusdam consequatur doloribus, error eum sequi dolor tempora magnam ab! Impedit, rem illo! Rem consectetur ullam itaque voluptates quaerat exercitationem sapiente explicabo? Voluptatibus reprehenderit, expedita nulla dicta possimus saepe dolorum rerum tenetur quae obcaecati doloribus, non quis fugiat? Eaque incidunt autem cumque, neque numquam officia similique quis id accusantium voluptates ad, quos eos corrupti quaerat hic reprehenderit! Excepturi impedit quaerat, vero doloremque nisi dolorem ducimus, dicta odit perspiciatis cum illum ipsa debitis quam molestias harum esse vitae eaque aliquam cupiditate reiciendis incidunt?</p>

                    <p className="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores animi, inventore eaque ipsam sapiente quisquam, facere iure repudiandae repellendus, eveniet numquam temporibus atque sed corrupti ad similique corporis soluta. Soluta voluptatum consectetur inventore, velit fugiat ducimus praesentium exercitationem nam saepe, quam pariatur aperiam maiores eaque sequi vel id. Mollitia.</p>

                    <p className="text-gray-700 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur reiciendis ducimus fuga repellendus numquam incidunt quibusdam tempore veniam dicta quam, nobis libero ipsum ipsam repellat minus blanditiis voluptatibus voluptas aut.</p>

                    <div className="w-full flex gap-3 flex-wrap items-center">
                        <Toggle variant="outline" aria-label="Like" pressed={isLiked} onPressedChange={handleToggleLike} className="flex items-center gap-1 cursor-pointer">
                            <ThumbsUp />
                            <span className="w-10 text-center">{formatNumber(like)}</span>
                        </Toggle>

                        <Button variant="outline" onClick={() => setIsComment(!isComment)} className={`${isComment ? "bg-accent" : ""} cursor-pointer`}>
                            <MessageCircle /> 55
                        </Button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Share2 /> {shareCount}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Share link</DialogTitle>
                                    <DialogDescription>
                                        Anyone who has this link will be able to view this.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="flex items-center space-x-2">
                                    <div className="grid flex-1 gap-2">
                                        <Label htmlFor="link" className="sr-only">Link</Label>
                                        <Input
                                            id="link"
                                            value={articleUrl}
                                            readOnly
                                        />
                                    </div>
                                    <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
                                        {copied ? <Check /> : <Copy />}
                                    </Button>
                                </div>

                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button>Close</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {isComment && (
                        <div className="w-full h-full">
                            <div className="w-full flex items-center gap-5">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Input className="hidden sm:block" placeholder="Tambahkan Komentar..."/>

                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <button className="block sm:hidden w-full text-left text-gray-500 border rounded-md px-3 py-2">
                                            Tambahkan Komentar...
                                        </button>
                                    </DrawerTrigger>
                                    <DrawerContent className="h-[90vh]">
                                        <DrawerHeader>
                                            <DrawerTitle>Tambah Komentar</DrawerTitle>
                                            <DrawerDescription>Silakan tuliskan komentar Anda di bawah ini.</DrawerDescription>
                                        </DrawerHeader>
                                        <div className="flex-1 px-4 space-y-4 overflow-auto">
                                            <Textarea className="w-full h-full border-none outline-none" placeholder="Tambahkan Komentar..." />
                                        </div>
                                        <DrawerFooter>
                                            <Button>Kirim</Button>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Batal</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>

                                <Button className="hidden sm:block">
                                    Tambahkan Komentar
                                </Button>
                            </div>

                            <div className="w-full my-3">
                                <div className="w-full flex items-center justify-between">
                                    <p>Komentar</p>

                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Disarankan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="latest">Terbaru</SelectItem>
                                            <SelectItem value="longest">Terlama</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full">
                                    <Comment article={article}>
                                        <Comment article={article} size={"w-9 h-9"} />
                                    </Comment>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </DefaultLayout>
    )
}

export default DetailArticle