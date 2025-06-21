// components/ShareButtons.jsx
import React from 'react'
import { Button } from '@/components/ui/button'

/**
 * ShareButtons Component
 * 
 * Props:
 * - downloadUrl: optional base64 data image (used for download)
 * - imageUrl: optional Cloudinary/public URL (used for sharing)
 */
const ShareButtons = ({ downloadUrl, imageUrl }) => {
    const siteUrl = 'https://gdgoc-kwasu.vercel.app/' // replace with your actual URL

    const shareLink = imageUrl || siteUrl // Prefer image URL if available
    const message = `🔥 I just created my BuildWithAI KWASU DP! Check it out 👉 ${shareLink} #BuildWithAI #KWASU #GDSC`

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'BuildWithAI KWASU DP',
                    text: message,
                    url: shareLink,
                })
            } catch (error) {
                console.error('Native sharing failed or cancelled', error)
            }
        } else {
            alert('Your device does not support native sharing.')
        }
    }

    return (
        <div className="mt-8 space-y-4 text-center">
            {downloadUrl && (
                <a
                    href={downloadUrl}
                    download="buildwithai-dp.png"
                    className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    📥 Download My DP
                </a>
            )}

            {imageUrl && (
                <div className="text-sm text-gray-500">
                    ✅ Public Image URL ready: <br />
                    <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                        {imageUrl}
                    </a>
                </div>
            )}

            <div className="flex flex-wrap justify-center gap-3 mt-4">
                {/* WhatsApp */}
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    WhatsApp
                </a>

                {/* Twitter */}
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Twitter/X
                </a>

                {/* LinkedIn */}
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                >
                    LinkedIn
                </a>

                {/* Native Device Share */}
                <Button
                    onClick={handleNativeShare}
                    className="bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                    📤 Share via Device
                </Button>
            </div>

            {/* Instagram note */}
            <p className="text-sm text-gray-500 max-w-md mx-auto">
                📸 To post on Instagram, please download and upload manually. Tag <strong>@gdg_kwasu</strong> and use
                <strong> #BuildWithAI</strong>, <strong>#KWASU</strong>.
            </p>
        </div>
    )
}

export default ShareButtons
