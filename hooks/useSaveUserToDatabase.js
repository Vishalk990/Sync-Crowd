import { useUser, useSession } from "@clerk/nextjs";
import { useEffect, useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

export function useSaveUserToDatabase() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { session, isLoaded: isSessionLoaded } = useSession();
  const [saveStatus, setSaveStatus] = useState(null);
  const saveTimeoutRef = useRef(null);
  const isSavingRef = useRef(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isUserLoaded && isSessionLoaded && user && session) {
      const hasRegistered = localStorage.getItem('userRegistered');
      
      if (!hasRegistered) {
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = setTimeout(() => {
          saveUserToDatabase(user);
        }, 1000);
      }
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [isUserLoaded, isSessionLoaded, user, session]);

  async function saveUserToDatabase(user) {
    if (isSavingRef.current) return;

    isSavingRef.current = true;
    setSaveStatus('saving');

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save user');
      }

      const data = await response.json();
      console.log('User successfully registered in DB:', data.user);
      setSaveStatus('success');
      localStorage.setItem('userRegistered', 'true');
      toast({
        title: "Success",
        description: "Welcome to Sync-Crowd!",
        duration: 2000,
      });
    } catch (error) {
      console.error('Error saving user to DB:', error.message);
      setSaveStatus('error');
      toast({
        title: "Error",
        description: "Error syncing user data. Please try again.",
        variant: "destructive",
        duration: 2000,
      });
    } finally {
      isSavingRef.current = false;
    }
  }

  return saveStatus;
}