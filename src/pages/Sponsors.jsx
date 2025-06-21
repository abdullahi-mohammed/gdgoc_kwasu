import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Calendar, Users, Zap } from "lucide-react"

export default function SponsorsPage() {
    const sponsorTiers = [
        {
            tier: "Platinum",
            color: "bg-gradient-to-r from-gray-300 to-gray-500",
            textColor: "text-white",
            price: "₦500,000",
            benefits: [
                "Logo on all event materials",
                "Speaking opportunity (10 mins)",
                "Premium booth space",
                "Social media mentions",
                "Newsletter inclusion",
                "VIP networking access",
            ],
            sponsors: [
                { name: "TechCorp Nigeria", logo: "/sponsors/techcorp-logo.png" },
                { name: "AI Solutions Ltd", logo: "/sponsors/ai-solutions-logo.png" },
            ],
        },
        {
            tier: "Gold",
            color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
            textColor: "text-white",
            price: "₦300,000",
            benefits: [
                "Logo on event materials",
                "Booth space",
                "Social media mentions",
                "Newsletter inclusion",
                "Networking access",
            ],
            sponsors: [
                { name: "DataFlow Systems", logo: "/sponsors/dataflow-logo.png" },
                { name: "CloudTech Africa", logo: "/sponsors/cloudtech-logo.png" },
                { name: "Innovation Hub", logo: "/sponsors/innovation-hub-logo.png" },
            ],
        },
        {
            tier: "Silver",
            color: "bg-gradient-to-r from-gray-400 to-gray-600",
            textColor: "text-white",
            price: "₦150,000",
            benefits: [
                "Logo on select materials",
                "Social media mentions",
                "Newsletter inclusion",
                "Event access",
            ],
            sponsors: [
                { name: "StartupNG", logo: "/sponsors/startupng-logo.png" },
                { name: "DevCommunity", logo: "/sponsors/devcommunity-logo.png" },
                { name: "TechHub Ilorin", logo: "/sponsors/techhub-logo.png" },
                { name: "CodeCraft", logo: "/sponsors/codecraft-logo.png" },
            ],
        },
        {
            tier: "Bronze",
            color: "bg-gradient-to-r from-orange-400 to-orange-600",
            textColor: "text-white",
            price: "₦75,000",
            benefits: ["Logo on website", "Social media mention", "Event access"],
            sponsors: [
                { name: "LocalTech", logo: "/sponsors/localtech-logo.png" },
                { name: "AI Enthusiasts", logo: "/sponsors/ai-enthusiasts-logo.png" },
                { name: "Student Dev Club", logo: "/sponsors/student-dev-logo.png" },
                { name: "Future Coders", logo: "/sponsors/future-coders-logo.png" },
                { name: "Tech Meetup", logo: "/sponsors/tech-meetup-logo.png" },
                { name: "Digital Craft", logo: "/sponsors/digital-craft-logo.png" },
            ],
        },
    ]

    const eventStats = [
        { icon: Users, label: "Expected Attendees", value: "500+" },
        { icon: Calendar, label: "Event Duration", value: "3 Days" },
        { icon: Zap, label: "AI Workshops", value: "12+" },
        { icon: MapPin, label: "Location", value: "KWASU Campus" },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-r  from-green-600 to-yellow-600-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Build with AI KWASU</h1>
                    <p className="text-xl md:text-2xl mb-6 opacity-90">Empowering the Next Generation of AI Innovators</p>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {eventStats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <stat.icon className="h-6 w-6" />
                                <div className="text-left">
                                    <div className="font-bold text-lg">{stat.value}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Sponsors Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Amazing Sponsors</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Thank you to our incredible sponsors who make this event possible and support the future of AI education
                            in Nigeria.
                        </p>
                    </div>

                    {sponsorTiers.map((tier, index) => (
                        <div key={index} className="space-y-6 mb-16">
                            <div className="text-center">
                                <div className={`inline-block px-8 py-3 rounded-full ${tier.color} ${tier.textColor} mb-4`}>
                                    <h3 className="text-2xl font-bold">{tier.tier} Sponsors</h3>
                                </div>
                            </div>

                            <div
                                className={`grid gap-6 ${tier.tier === "Platinum"
                                    ? "grid-cols-1 md:grid-cols-2"
                                    : tier.tier === "Gold"
                                        ? "grid-cols-2 md:grid-cols-3"
                                        : tier.tier === "Silver"
                                            ? "grid-cols-2 md:grid-cols-4"
                                            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                                    }`}
                            >
                                {tier.sponsors.map((sponsor, i) => (
                                    <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="p-6 flex items-center justify-center">
                                            <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-16 object-contain" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sponsorship Packages */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsorship Packages</h2>
                        <p className="text-lg text-gray-600">Choose the perfect sponsorship package for your organization</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsorTiers.map((tier, index) => (
                            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className={`h-2 ${tier.color}`} />
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                                        <div className="text-3xl font-bold text-purple-600">{tier.price}</div>
                                    </div>

                                    <ul className="space-y-3">
                                        {tier.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-yellow-600-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sponsor Build with AI KWASU?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join us in empowering the next generation of AI innovators and showcase your brand to Nigeria's brightest
                        tech minds.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                            <Mail className="mr-2 h-5 w-5" />
                            Become a Sponsor
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Contact Us
                        </Button>
                    </div>

                    {/* <a href="/admin/certificates" className="text-white hover:text-gray-200 underline text-sm">
                        Admin: Generate Certificates
                    </a> */}
                </div>
            </section>
        </div>
    )
}
