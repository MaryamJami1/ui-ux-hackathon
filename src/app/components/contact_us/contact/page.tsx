import { MapPin, Phone, Clock, Headphones, CheckCircle, Trophy } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export default function ContactForm() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 font-inter lg:px-28">
            <div className="container px-4 md:px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Get In Touch With Us
                    </h2>
                    <p className="max-w-2xl text-gray-600 leading-relaxed">
                        For more information about our product & services, feel free to drop us an email. Our staff is always ready to assist you. Don’t hesitate!
                    </p>
                </div>

                {/* Content Section */}
                <div className="mx-auto grid max-w-5xl gap-12 pt-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-8">
                        {[
                            {
                                Icon: MapPin,
                                title: "Address",
                                content: (
                                    <>
                                        <p>236 5th SE Avenue, New York</p>
                                        <p>NY10000, United States</p>
                                    </>
                                )
                            },
                            {
                                Icon: Phone,
                                title: "Phone",
                                content: (
                                    <>
                                        <p>Mobile: +(84) 546-6789</p>
                                        <p>Hotline: +(84) 456-6789</p>
                                    </>
                                ),
                            },
                            {
                                Icon: Clock,
                                title: "Working Time",
                                content: (
                                    <>
                                        <p>Monday-Friday: 9:00 - 22:00</p>
                                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                                    </>
                                ),
                            },
                        ].map(({ Icon, title, content }, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <Icon className="h-6 w-6 shrink-0 text-[#00A0B0]" />
                                <div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white lg:px-12 rounded-lg">
                        <form className="flex flex-col gap-6">
                            {[
                                { id: "name", label: "Your name", placeholder: "Abc", type: "text" },
                                {
                                    id: "email",
                                    label: "Email address",
                                    placeholder: "Abc@def.com",
                                    type: "email",
                                },
                                {
                                    id: "subject",
                                    label: "Subject",
                                    placeholder: "This is optional",
                                    type: "text",
                                },
                                {
                                    id: "message",
                                    label: "Message",
                                    placeholder: "Hi! I'd like to ask about",
                                    type: "textarea",
                                },
                            ].map(({ id, label, placeholder, type }) => (
                                <div key={id} className="space-y-2">
                                    <label
                                        htmlFor={id}
                                        className="text-sm font-medium leading-none"
                                    >
                                        {label}
                                    </label>
                                    {type === "textarea" ? (
                                        <textarea
                                            id={id}
                                            placeholder={placeholder}
                                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A0B0] focus:border-transparent"
                                            rows={4}
                                        />
                                    ) : (
                                        <input
                                            id={id}
                                            type={type}
                                            placeholder={placeholder}
                                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A0B0] focus:border-transparent"
                                        />
                                    )}
                                </div>
                            ))}
                            <Button className="bg-[#00A0B0] hover:bg-[#008A99] text-white py-2 px-4 rounded-md">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>





            <header className="w-full py-12 mt-10 lg:mt-[7rem]  bg-[#F4F4F4]">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* High Quality */}
                        <div className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-12 h-12">
                                <Trophy className="w-8 h-8 text-[#2F2F2F]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-[#2F2F2F]" style={{ fontFamily: 'Inter' }}>
                                    High Quality
                                </h3>
                                <p className="text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
                                    crafted from top materials
                                </p>
                            </div>
                        </div>

                        {/* Warranty Protection */}
                        <div className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-12 h-12">
                                <CheckCircle className="w-8 h-8 text-[#2F2F2F]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-[#2F2F2F]" style={{ fontFamily: 'Inter' }}>
                                    Warranty Protection
                                </h3>
                                <p className="text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
                                    Over 2 years
                                </p>
                            </div>
                        </div>

                        {/* 24/7 Support */}
                        <div className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-12 h-12">
                                <Headphones className="w-8 h-8 text-[#2F2F2F]" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-[#2F2F2F]" style={{ fontFamily: 'Inter' }}>
                                    24 / 7 Support
                                </h3>
                                <p className="text-[#6B7280]" style={{ fontFamily: 'Inter' }}>
                                    Dedicated support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}
