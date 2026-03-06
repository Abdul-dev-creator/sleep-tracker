"use client"

import {  Calendar, User } from "lucide-react";
import { useUserSession } from "../../../custom-hooks/useSession";
import Header from "./Header";
import { Activity, useState } from "react";
import { sleepQualityOptions } from "./AddSleepRecord";
import AddSleepRecord from "./AddSleepRecord";

const sampleSleepHistory = 
[
    {date:"2024-5-8", duration:"7.5", quality:"good"},
    {date:"2024-5-9", duration:"6.5", quality:"average"},
];



export default function DashboardComponent() {
    const { loading, session } = useUserSession();
    const userId = session?.user.id
    const [showAddForm,setShowAddForm] = useState(false);

    if (loading) return <p>Loading.....</p>

    if (session) {
        return (
            <div className="min-h-screen bg-slate-900 text-white">
                {/* header */}
                <Header setShowAddForm={setShowAddForm} />
                <div className="container px-6 py-8 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* left-column -user/info */}
                        <div className="space-y-8 lg:col-span-1">
                            {/* user profile card */}
                            <div className="bg-slate-800 rounded-2xl p-6 border-slate-700">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-fuchsia-600 rounded-full grid place-items-center">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-white">User name</h2>
                                        <p className="text-gray-400 text-sm">user@gmail</p>
                                    </div>
                                </div>
                            </div>
                            {/* add sleep form */}
                            <Activity mode={showAddForm ? 'visible' :'hidden'}>

                                <AddSleepRecord userId={userId} onCancel={() => setShowAddForm(false)} />
                            </Activity>
                            
                           
                        </div>

                            {/* right column - sleep records */}
                        <div className="space-y-8 lg:col-span-2">
                            {/* sleep statistics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-800 border border-slate-700 rounded-xl text-center p-6">
                                    <p className="text-3xl font-bold text-green-500">7.2hrs</p>
                                    <p className="text-gray-400">Average Sleep</p>
                                </div>
                                <div className="bg-slate-800 border border-slate-700 rounded-xl text-center p-6">
                                    <p className="text-3xl font-bold text-fuchsia-500">7hrs</p>
                                    <p className="text-gray-400">Best Sleep</p>
                                </div>
                                <div className="bg-slate-800 border border-slate-700 rounded-xl text-center p-6">
                                    <p className="text-3xl font-bold text-blue-500">7</p>
                                    <p className="text-gray-400">Records</p>
                                </div>

                            </div>

                            {/* sleep history */}
                            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Calendar size={20} className="text-fuchsia-500"/>
                                Sleep History
                            </h3>
                            <div className="overflow-x-auto">
                            <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <td className="text-left py-3 font-medium text-gray-400">Date</td>
                                    <td className="text-left py-3 font-medium text-gray-400">Duration</td>
                                    <td className="text-left py-3 font-medium text-gray-400">Quality</td>
                                </tr>
                            </thead>
                            <tbody>
                           {sampleSleepHistory.map((record,index)=> {
                            const qualityOption = sleepQualityOptions.find(option => option.value === record.quality)
                            return (
                                 <tr key={index} className="border-b border-slate-700/50 last:border-0">
                                    <td className="py-3">{new Date(record.date).toLocaleDateString()}</td>
                                    <td className="py-3">{record.duration}h</td>
                                    <td className={`py-3 ${qualityOption?.color}`}>{qualityOption?.label}</td>
                                 </tr>
                            )
                           })}
                            </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
