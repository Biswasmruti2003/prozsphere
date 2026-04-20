export default function NotificationPreference() {

    const data = [
        {
            alert: "Email Alerts",
            desc: "Receive updates directly in your registered email."
        },
        {
            alert: "SMS Alerts",
            desc: "Get important notifications via text message on your registered number."
        },
        {
            alert: "WhatsApp Alerts",
            desc: "Get instant updates via WhatsApp for bookings and payments."
        }
    ]

    return (
        <div className="p-10 max-w-4xl ">
            <h1 className="text-2xl font-bold mb-10">Security & Login</h1>
            <div className="space-y-12">
                {data.map((el ,idx) => {
                    return (
                        <div key={idx} className="flex justify-between items-center">
                            <div>
                                <h2 className="text-[16px] font-[600] ">{el.alert}</h2>
                                <p className="text-[16px] font-[500] text-[#718096]">{el.desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-14 h-8 bg-[#959595] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white  after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}