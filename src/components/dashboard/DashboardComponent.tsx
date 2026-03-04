"use client"

import {  User } from "lucide-react";
import { useUserSession } from "../../../custom-hooks/useSession";
import Header from "./Header";
import AddSleepRecord from "./AddSleepRecord";
import { Activity, useState } from "react";


export default function DashboardComponent() {
    const { loading, session } = useUserSession();
    const [showAddForm,setShowAddForm] = useState(false);

    if (loading) return <p>Loading.....</p>

    if (session) {
        return (
            <div className="min-h-screen bg-slate-900 text-white">
                {/* header */}
                <Header setShowAddForm={setShowAddForm} />
                <div className=" container px-6 py-8 mx-auto">
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

                                <AddSleepRecord/>
                            </Activity>
                            
                           
                        </div>

                            {/* right column - sleep records */}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
