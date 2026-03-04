import { Calendar, Plus } from "lucide-react";
import { useState } from "react";

const sleepQualityOption = [
    {value:"excellent", label:"😊 Excellent"},
    {value:"excellent", label:"🙂 Good"},
    {value:"excellent", label:"😲 Average"},
    {value:"excellent", label:"😔 Poor"},
    {value:"excellent", label:"😣 Terrible"},
];


export default function AddSleepRecord() {
    const [duration,setDuration] = useState(7);
    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plus size={20} className="text-fuchsia-500" />
                Add Sleep Record
            </h3>

            <form className="space-y-4">
                {/* date input */}
                <div>
                    <label htmlFor="date" className="block text-gray-300 text-sm font-medium mb-2">
                        <Calendar size={16} className="inline mr-2" />
                    </label>
                    <input type="date" id="date" required className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors" />
                </div>

                {/* sleep duration range */}
                <div>
                    <label htmlFor="date" className="block text-gray-300 text-sm font-medium mb-2">
                        <Calendar size={16} className="inline mr-2" />
                        Sleep Duration <span>{duration}</span> hours
                    </label>
                    <input type="range" 
                    min="1"
                    max="12"
                    step="0.5"
                    defaultValue="7"
                    onChange={(e)=> setDuration(parseFloat(e.target.value))}
                    className="w-full bg-slate-700 h-2 rounded-lg appearance-none "/>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1hr</span>
                    <span>12hrs</span>
                    </div>
                </div>
                {/* select for sleep quality */}
                <div>
                    <label htmlFor="quality" className="block text-gray-300 text-sm font-medium mb-2">
                    Sleep Quality
                    </label>
                    <select name="quality" id="quality" defaultValue="good" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500 transition-colors">
                        {sleepQualityOption.map((option)=> {
                            return(

                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            )
                        })}
                    </select>
                </div>
                    {/* action button */}
                <div className="flex gap-3 pt-4">
                    <button className="flex -1 px-4 py-3 bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-semibold  transition-colors rounded-lg">
                        Save Record
                    </button>
                    <button className="flex -1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold  transition-colors rounded-lg">
                    Cancel
                    </button>
                </div>
            </form>

        </div>
    )
}
