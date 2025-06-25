import React, { useState, useRef, useEffect } from 'react'
import Hero from '../../components/hero'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
// import frameImg from '/buildwithaiframe.jpg' // adjust path as needed
import frameImg from '../../assets/Subtract (2).png' // adjust path as needed
import ShareButtons from '../../components/ShareButtons'

const CANVAS_SIZE = 900 // square canvas

const GetDp = () => {
    const [name, setName] = useState('')
    const [imageSrc, setImageSrc] = useState(null)
    const [downloadUrl, setDownloadUrl] = useState(null)
    const canvasRef = useRef(null)
    const frameRef = useRef(new Image())
    console.log(frameImg, 'frame 1', frameRef);
    const [frameLoaded, setFrameLoaded] = useState(false)

    const drawFrameOnly = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
        ctx.drawImage(frameRef.current, 0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }


    // Load frame image
    useEffect(() => {
        const img = new Image()
        img.src = frameImg
        img.onload = () => {
            drawFrameOnly() // Draw frame only on initial load
            frameRef.current = img
            setFrameLoaded(true)
        }
    }, [])
    // Redraw canvas when image or name changes

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const userImage = new Image();

        userImage.onload = () => {
            ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // Frame cutout configuration
            const CUTOUT_X = 520;
            const CUTOUT_Y = 160;
            const CUTOUT_WIDTH = 357;  // You must confirm this
            const CUTOUT_HEIGHT = 353; // You must confirm this

            // Resize user image proportionally to fit inside the cutout
            const imgWidth = userImage.width;
            const imgHeight = userImage.height;
            const cutoutRatio = CUTOUT_WIDTH / CUTOUT_HEIGHT;
            const imgRatio = imgWidth / imgHeight;

            let drawWidth, drawHeight;

            if (imgRatio > cutoutRatio) {
                // Image is wider: fit by height
                drawHeight = CUTOUT_HEIGHT;
                drawWidth = imgWidth * (CUTOUT_HEIGHT / imgHeight);
            } else {
                // Image is taller: fit by width
                drawWidth = CUTOUT_WIDTH;
                drawHeight = imgHeight * (CUTOUT_WIDTH / imgWidth);
            }

            // Center image inside cutout
            const drawX = CUTOUT_X - (drawWidth - CUTOUT_WIDTH) / 2;
            const drawY = CUTOUT_Y - (drawHeight - CUTOUT_HEIGHT) / 2;

            ctx.drawImage(userImage, drawX, drawY, drawWidth, drawHeight);

            // Draw frame on top
            ctx.drawImage(frameRef.current, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // Draw name if available
            if (name) {
                ctx.font = 'bold 28px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(name, 695, 570); // You can adjust Y here
            }

            // Create downloadable image
            setDownloadUrl(canvas.toDataURL('image/png'));
        };

        if (imageSrc) {
            userImage.src = imageSrc;
        }
    }, [imageSrc, name, frameLoaded, frameRef]);


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

                <div className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:items-start">
                    {/* Form */}
                    <div className="space-y-6 w-full max-w-md">
                        <div>
                            <Label htmlFor="name">Your Full Name</Label>
                            <Input
                                id="name"
                                placeholder="e.g. Sarah Adeola"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                maxLength={20} // ⬅️ Limit to 20 characters (adjust as needed)
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                {name.length}/{20} characters
                            </p>
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
                        {downloadUrl && <ShareButtons downloadUrl={downloadUrl} />}

                        {/* {downloadUrl && (
                            <a

                                href={downloadUrl}
                                download="buildwithai-dp.png"
                                className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                            >
                                Download My DP
                            </a>
                        )} */}
                    </div>

                    {/* Canvas Preview */}
                    <div className=" flex justify-center">
                        {/* {frameLoaded && (<img src={frameImg} />)} */}
                        <canvas
                            ref={canvasRef}
                            width={CANVAS_SIZE}
                            height={CANVAS_SIZE}
                            className="border rounded shadow w-full max-w-[600px]"
                        />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default GetDp
