import React, { useState, useRef, useEffect } from 'react'
import Hero from '../../components/hero'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import frameImg from '../../../public/gdguifrme.png' // adjust path as needed

const CANVAS_SIZE = 600 // square canvas

const GetDp = () => {
    const [name, setName] = useState('')
    const [imageSrc, setImageSrc] = useState(null)
    const [downloadUrl, setDownloadUrl] = useState(null)
    const canvasRef = useRef(null)
    const frameRef = useRef(new Image())

    // Load frame image
    useEffect(() => {
        frameRef.current.src = frameImg
    }, [])

    // Redraw canvas when image or name changes
    useEffect(() => {
        if (!imageSrc) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const userImage = new Image()
        userImage.onload = () => {
            // Clear canvas
            ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

            // Draw uploaded image (fit it into square canvas)
            ctx.drawImage(userImage, 0, 0, CANVAS_SIZE, CANVAS_SIZE)

            // Draw frame
            ctx.drawImage(frameRef.current, 0, 0, CANVAS_SIZE, CANVAS_SIZE)

            // Add name
            if (name) {
                ctx.font = 'bold 28px sans-serif'
                ctx.fillStyle = 'red'
                ctx.textAlign = 'center'
                ctx.fillText(name, CANVAS_SIZE / 2, CANVAS_SIZE - 30)
            }

            // Set download URL
            const url = canvas.toDataURL('image/png')
            setDownloadUrl(url)
        }
        userImage.src = imageSrc
    }, [imageSrc, name])

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageSrc(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Hero />

            <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 py-10">
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6">
                    Get Your Official BuildWithAI KWASU 2025 DP
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Form */}
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="name">Your Full Name</Label>
                            <Input
                                id="name"
                                placeholder="e.g. Sarah Adeola"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor="photo">Profile Photo</Label>
                            <p className="text-sm text-gray-500 mb-1">
                                For best results, remove background at{' '}
                                <a
                                    href="https://www.remove.bg"
                                    target="_blank"
                                    className="underline text-blue-600"
                                    rel="noopener noreferrer"
                                >
                                    remove.bg
                                </a>
                            </p>
                            <Input
                                id="photo"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </div>

                        {downloadUrl && (
                            <a
                                href={downloadUrl}
                                download="buildwithai-dp.png"
                                className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Download My DP
                            </a>
                        )}
                    </div>

                    {/* Canvas Preview */}
                    <div className="w-full flex justify-center">
                        <canvas
                            ref={canvasRef}
                            width={CANVAS_SIZE}
                            height={CANVAS_SIZE}
                            className="border rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GetDp
