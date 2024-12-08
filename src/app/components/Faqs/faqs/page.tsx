'use client'

import { Plus } from 'lucide-react'
import { useState } from "react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems = [
    {
      question: "What types of chairs do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "Do your chairs come with a warranty?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-semibold mb-4 text-[#333333]">
            Questions Looks Here
          </h2>
          <p className="text-[#666666] max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-[#333333]">
                  {item.question}
                </span>
                <Plus 
                  className={`h-5 w-5 transition-transform ${
                    openItems.includes(index) ? 'rotate-45' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-[#666666] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

