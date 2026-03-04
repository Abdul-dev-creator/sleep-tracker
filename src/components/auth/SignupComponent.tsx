"use client"

import { Lock, Mail, Router, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Activity, useState } from "react"
import { supabase } from "../../../lib/supabase"
import { useRouter } from "next/navigation"
import { useRedirectIfAuth } from "../../../custom-hooks/useRedirectIfAuth"
import { useGoogleSignIn } from "../../../custom-hooks/useGoogleOauth"



export default function SignupComponent() {
    const router = useRouter();
     const { signInWithGoogle } = useGoogleSignIn();
    const {loading} = useRedirectIfAuth();
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.password) {
            setMessage("All fields are required")
            return;
        }


        //send data to supabae
        const {error} = await supabase.auth.signUp({
            email:formData.email,
            password:formData.password,
            options:{
                data:{
                    full_name:formData.fullName
                }
            }
        });

        if(error) {
            setMessage(error.message)
        } else{
            router.replace("/dashboard");
        }
       
    };
    if (loading) return null;
    return (
        <div className="h-screen flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full">

                {/* header */}
                <div className="text-center mb-8">
                    <h3 className="font-bold text-white mb-2 text-2xl">Create Account</h3>
                    <p className="text-gray-400">Sign up to start your tracking your sleep</p>
                </div>

                {/*sign in card  */}
                <div className="rounded-2xl border border-slate-700 p-8">
                    <button onClick={signInWithGoogle}  className="w-full bg-gray-200 px-4 py-3 flex items-center justify-center gap-3 mb-3 cursor-pointer rounded-lg transition-colors text-gray-500">
                        <Image src="/images/goggle.png" alt="goggle" width={50} height={50} className="w-6 h-6" />
                        Continue with Google
                    </button>

                    {/* divider */}
                    <div className="relative mb-6 mt-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600"></div>
                        </div>

                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-slate-800 text-gray-400">Or continue with email</span>
                        </div>

                    </div>
                    {/* loginForm */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Activity mode={message ? "visible" : "hidden"}>

                            <p className="bg-fuchsia-500 text-center py-1 mb-6 font-semibold text-white">{message}</p>
                        </Activity>
                        <div className="my-8">
                            <div className="relative my-4">
                                <Mail className="absolute left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 top-1/2" />
                                <input value={formData.email} onChange={handleChange} name="email" type="text" id="subject" placeholder="Enter your email" className="w-full bg-slate-700 border border-slate-600 rounded-lg pr-4 pl-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors" />

                            </div>

                        </div>
                        <div className="my-8">
                            <div className="relative my-4">
                                <User className="absolute left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 top-1/2" />
                                <input value={formData.fullName} onChange={handleChange} name="fullName" type="text" id="subject"  placeholder="Enter your name" className="w-full bg-slate-700 border border-slate-600 rounded-lg pr-4 pl-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors" />

                            </div>

                        </div>
                        <div className="my-8">
                            <div className="relative my-4">
                                <Lock className="absolute left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 top-1/2" />
                                <input value={formData.password} onChange={handleChange} name="password" type="text" id="subject"  placeholder="Enter your password" className="w-full bg-slate-700 border border-slate-600 rounded-lg pr-4 pl-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors" />

                            </div>

                        </div>
                        <button className="w-full transition-colors bg-fuchsia-600 font-semibold hover:bg-fuchsia-700 text-white rounded-lg px-3 py-4">Sign Up</button>

                    </form>

                    <div className="text-center mt-6 pt-6 border-t border-slate-700">
                        <p className="text-gray-400">
                            Already have an account? {""}
                            <Link href="/login" className="text-fuchsia-500 font-semibold">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
