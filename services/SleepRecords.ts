import { SleepRecord } from "@/components/dashboard/SleepHistory";
import { supabase } from "../lib/supabase";

export async function fetchSleepRecords(userId: string): Promise<SleepRecord[]> {
    try {
        if (!userId) {
            throw new Error("User Id is required")

        }
        const { error, data } = await supabase.from("sleep_records").select("*").eq("user_id", userId).order('date', { ascending: false }).limit(7)
        if (error) {
            throw error;
        }
        return data || [];
    } catch (error) {
        console.error("Error fetching sleep records:", error)
        return []
    }
}