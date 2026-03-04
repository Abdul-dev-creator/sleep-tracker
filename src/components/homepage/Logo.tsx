import Link  from "next/link";
import { BedSingle } from "lucide-react";



export default function Logo() {
  return (
 <Link href="/" className="flex items-center gap-1 z-50">
    <BedSingle size={36} className="text-fuchsia-700" />
    <span className="text-gray-300 text-2xl font-semibold">RestMetrics</span>
 </Link>
  )
}
