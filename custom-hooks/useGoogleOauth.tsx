import { supabase } from "../lib/supabase";

export function useGoogleSignIn() {
    const signInWithGoogle = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/dashboard`
                }
            });
            if (error) {
                console.error("Google sign-in error:", error.message);
            }
         } catch (error) {
            console.error("Unexpected error during Google sign-in:", error);
        }
    };

    return { signInWithGoogle };
};