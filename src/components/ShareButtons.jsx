// components/ShareButtons.jsx
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

/**
 * ShareButtons Component
 * 
 * Props:
 * - downloadUrl: optional base64 data image (used for download)
 * - imageUrl: optional Cloudinary/public URL (used for sharing)
 */
const ShareButtons = ({ downloadUrl, imageUrl }) => {
    const [copied, setCopied] = useState(false);

    const siteUrl = 'https://gdgoc-kwasu.vercel.app/' // replace with your actual URL

    const shareLink = imageUrl || siteUrl // Prefer image URL if available
    const message = `🔥 I just created my BuildWithAI KWASU DP! Check it out 👉 ${shareLink}.
    📅 RSVP for the Build With AI KWASU event https://gdg.community.dev/e/m4hfy3/
    
    #BuildWithAI #KWASU #GDGo_CKWASU`
    const igMmessage = `🔥 I just created my BuildWithAI @gdgoc_kwasu KWASU DP! Check it out 👉 ${shareLink}.
    RSVP for the Build With AI KWASU event https://gdg.community.dev/e/m4hfy3/
    
    #BuildWithAI #KWASU #GDGo_CKWASU`
    const xMessage = `🔥 I just created my BuildWithAI @gdgoC_Kwasu KWASU DP! Check it out 👉 ${shareLink}.
    RSVP for the Build With AI KWASU event https://gdg.community.dev/e/m4hfy3/
    
    #BuildWithAI #KWASU #GDGo_CKWASU`


    const handleCopy = () => {
        navigator.clipboard.writeText(igMmessage).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

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
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(xMessage)}`}
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
            <div className="text-center space-y-2">
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                    📸 To post on Instagram, please download and upload manually. Tag <strong>@gdg_kwasu</strong> and use
                    <strong> #BuildWithAI</strong>, <strong>#KWASU</strong>.
                </p>

                <button
                    onClick={handleCopy}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    {copied ? "Caption Copied ✅" : "Copy Instagram Caption"}
                </button>
            </div>
            {/* <p className="text-sm text-gray-500 max-w-md mx-auto">
                📸 To post on Instagram, please download and upload manually. Tag <strong>@gdg_kwasu</strong> and use
                <strong> #BuildWithAI</strong>, <strong>#KWASU</strong>.
            </p> */}
        </div>
    )
}

export default ShareButtons
