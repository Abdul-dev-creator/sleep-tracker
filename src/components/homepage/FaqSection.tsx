const faqs = [
    {
        question: "Can I use RestMetrics with my smartwatch?",
        answer: "Yes! RestMetrics integrates with Wearables including Apple Watch, Fitbit, Garmin, and Samsung Galaxy Watch. Simply connect your device in the app setting."

    },
    {
        question: "Is there a free version available",
        answer: "Yes, we offer a free version with basic sleep tracking and 7-day history. Our premium plans unlock advanced features like detailed sleep analysis, unlimited history, and personalized recommendations."

    },
    {
        question: "Do you offer customer support?",
        answer: "Yes,  we  have a dedicated support team available 24/7. We can reach us through in-app chat, email, or our comprehensive help center with airticles and tutorials"

    },
    {
        question: "Can multiple people use the same account?",
        answer: "Each account is designed for individuls use to ensure accurate personal insights. For family plans that allow separate profiles under one suscription."

    },
];

export default function FaqSection() {
    return (
        <section id='faq'>
            <div className='container mx-auto px-4 max-w-4xl'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Frequently Asked<span className='text-fuchsia-500'> Questions</span></h2>
                    <p className='text-md text-gray-300 mx-auto max-w-3xl'> Get answers to common questions about RestMetrics and how it help you achieve better sleep.
                    </p>
                </div>

                {/* faq grid */}
                <div className="space-y-6">
                {faqs.map((faq,index)=> {
                    return (
                        <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors border border-slate-700">
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                            <span className="mr-3 text-fuchsia-500 shrink-0">Q:</span>
                            {faq.question}
                            </h3>
                            <p className="text-gray-400 ml-8">
                            <span className="text-fuchsia-500 mr-2 font-semibold">A:</span>
                            {faq.answer}
                            </p>
                        </div>
                    )
                })}
                </div>

                {/* still some question */}

                <div className="text-center mt-16">
                <div className="bg-linear-to-r from bg-slate-800 to-purple-900/30 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mx-auto mb-6">Still have questions?</h3>
                <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-400">Can't find the answer you're looking for? pls chat with our friendly team.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-fuchsia-600 hover:bg-fuchsia-700 px-8 py-3 text-white rounded-full transition-colors font-semibold">
                        Contact Support
                    </button>
                    
                    <button className="border-2 border-gray-600 hover:border-fuchsia-600 hover:text-fuchsia-500 text-gray-300 rounded-full transition-colors px-8 py-3">
                        Send Email
                    </button>

                </div>
                </div>

                </div>
            </div>
        </section>
    )
}
