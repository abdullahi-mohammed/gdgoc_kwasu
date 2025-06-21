"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Gift, MapPin, Edit3, Check, X, Image, Handshake } from "lucide-react"
import { Laptop, Info } from "lucide-react"

function FlipCard({ value, label, previousValue }) {
    const [isFlipping, setIsFlipping] = useState(false)

    useEffect(() => {
        if (value !== previousValue) {
            setIsFlipping(true)
            const timer = setTimeout(() => setIsFlipping(false), 300)
            return () => clearTimeout(timer)
        }
    }, [value, previousValue])

    const displayValue = value.toString().padStart(2, "0")
    const displayPrevious = previousValue.toString().padStart(2, "0")

    return (
        <div className="relative">
            <div className="flip-card-container">
                <Card className="flip-card bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 shadow-lg">
                    <div className="flip-card-content">
                        <span className="flip-number text-gray-400 dark:text-gray-600">{displayPrevious}</span>
                    </div>
                </Card>
                <Card className={`flip-card flip-card-animated bg-gradient-to-b from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border-2 shadow-xl ${isFlipping ? "flipping" : ""}`}>
                    <div className="flip-card-content">
                        <span className="flip-number text-gray-900 dark:text-white">{displayValue}</span>
                    </div>
                    <div className="flip-overlay"></div>
                </Card>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 dark:bg-gray-600 z-10 transform -translate-y-px"></div>
            </div>
            <div className="text-center mt-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{label}</span>
            </div>
        </div>
    )
}

function EventDetails() {
    return (
        <Card className="p-6 mb-8 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border-2">
            <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Build with AI KWASU 2025
                </h2>

                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-medium">Date:</p>
                        <p>June 28–30, 2024</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Clock className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-medium">Time:</p>
                        <p>10:00 AM – 5:00 PM daily</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-medium">Venue:</p>
                        <p>KWASU Innovation Hub, Malete Campus</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Laptop className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-medium">What to Bring:</p>
                        <ul className="list-disc ml-5">
                            <li>Laptop & charger</li>
                            <li>Notebook & pen</li>
                            <li>Valid school/work ID card</li>
                            <li>Curiosity and a passion for tech!</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <Info className="w-5 h-5 mt-1" />
                    <div>
                        <p className="font-medium">Note:</p>
                        <p>There will be hands-on AI workshops, networking, free swags, and certification for participants.</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}


export default function CountdownFlip() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [previousTime, setPreviousTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [targetDate, setTargetDate] = useState(() => {
        const date = new Date()
        date.setDate(date.getDate() + 7)
        return date
    })

    const [eventDetails, setEventDetails] = useState({
        name: "Build with AI KWASU",
        description: "An immersive 3-day workshop exploring the future of AI with students, developers and sponsors.",
        location: "KWASU, Malete, Kwara State",
    })
    const [isEditing, setIsEditing] = useState(false)

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date()
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setPreviousTime(timeLeft)
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [timeLeft, targetDate])

    const setNewDate = (days) => {
        const newDate = new Date()
        newDate.setDate(newDate.getDate() + days)
        setTargetDate(newDate)
    }

    const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Gift className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Countdown to Build with AI KWASU
                        </h1>
                        <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Join hundreds of students and developers as we build the future with Artificial Intelligence
                    </p>
                </div>

                <div className="text-center mb-8">
                    {isExpired ? (
                        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-red-600 dark:text-red-400">
                            <Clock className="w-6 h-6" /> Event has started!
                        </div>
                    ) :
                        <div className="text-lg text-gray-700 dark:text-gray-300">Time remaining until the event</div>
                    }
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                    <FlipCard value={timeLeft.days} label="Days" previousValue={previousTime.days} />
                    <FlipCard value={timeLeft.hours} label="Hours" previousValue={previousTime.hours} />
                    <FlipCard value={timeLeft.minutes} label="Minutes" previousValue={previousTime.minutes} />
                    <FlipCard value={timeLeft.seconds} label="Seconds" previousValue={previousTime.seconds} />
                </div>



                {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <Button onClick={() => setNewDate(1)}>1 Day</Button>
                    <Button onClick={() => setNewDate(7)}>1 Week</Button>
                    <Button onClick={() => setNewDate(30)}>1 Month</Button>
                    <Button onClick={() => setNewDate(365)}>1 Year</Button>
                </div> */}

                <EventDetails />


                {/* CTA Section */}
                <div className="text-center space-y-6 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Be Part of the Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">Customize your profile, show your support, or join us as a sponsor.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                            <Image className="w-4 h-4 mr-2" /> Get My DP
                        </Button>
                        <Button variant="outline">
                            <Handshake className="w-4 h-4 mr-2" /> View Sponsors
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .flip-card-container {
          position: relative;
          perspective: 1000px;
          height: 120px;
          width: 100px;
          margin: 0 auto;
        }
        .flip-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform-style: preserve-3d;
          transition: transform 0.3s ease-in-out;
        }
        .flip-card-animated.flipping {
          animation: flip 0.6s ease-in-out;
        }
        .flip-card-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        .flip-number {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'Courier New', monospace;
          line-height: 1;
        }
        .flip-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, transparent 48%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 52%, transparent 100%);
          pointer-events: none;
          z-index: 3;
        }
        @keyframes flip {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(0deg); }
        }
        @media (max-width: 768px) {
          .flip-card-container {
            height: 100px;
            width: 80px;
          }
          .flip-number {
            font-size: 2rem;
          }
        }
      `}</style>
        </div>
    )
}
