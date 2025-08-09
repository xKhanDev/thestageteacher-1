import { useState } from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> main
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2, ArrowLeft, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

const ForgotPasswordModal = ({ isOpen, onClose, onBackToLogin }: ForgotPasswordModalProps) => {
<<<<<<< HEAD
=======
  const { t } = useTranslation();
>>>>>>> main
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async () => {
    if (!email) {
      toast({
<<<<<<< HEAD
        title: "Email Required",
        description: "Please enter your email address",
=======
        title: t("passwordReset.emailRequired"),
        description: t("passwordReset.enterEmailError"),
>>>>>>> main
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
<<<<<<< HEAD
          title: "Reset Failed",
=======
          title: t("passwordReset.resetFailed"),
>>>>>>> main
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsEmailSent(true);
        toast({
<<<<<<< HEAD
          title: "Reset Email Sent",
          description: "Check your email for password reset instructions",
=======
          title: t("passwordReset.resetEmailSent"),
          description: t("passwordReset.checkEmailMessage"),
>>>>>>> main
        });
      }
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "An unexpected error occurred",
=======
        title: t("common.error"),
        description: t("passwordReset.errorOccurred"),
>>>>>>> main
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setIsEmailSent(false);
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              {isEmailSent ? (
                <CheckCircle className="h-8 w-8 text-white" />
              ) : (
                <Mail className="h-8 w-8 text-white" />
              )}
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
<<<<<<< HEAD
            {isEmailSent ? "Check Your Email" : "Reset Password"}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            {isEmailSent 
              ? "We've sent password reset instructions to your email address"
              : "Enter your email address and we'll send you a link to reset your password"
=======
            {isEmailSent ? t("passwordReset.checkEmail") : t("passwordReset.resetPassword")}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            {isEmailSent 
              ? t("passwordReset.resetSent")
              : t("passwordReset.resetDescription")
>>>>>>> main
            }
          </DialogDescription>
        </DialogHeader>

        {!isEmailSent ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-gray-700 font-medium">
<<<<<<< HEAD
                Email Address
=======
                {t("passwordReset.emailAddress")}
>>>>>>> main
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="reset-email"
                  type="email"
<<<<<<< HEAD
                  placeholder="Enter your email"
=======
                  placeholder={t("passwordReset.enterEmailPlaceholder")}
>>>>>>> main
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-purple-300 focus:ring-purple-200 transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleResetPassword}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
                    Sending Reset Link...
                  </>
                ) : (
                  "Send Reset Link"
=======
                    {t("passwordReset.sendingResetLink")}
                  </>
                ) : (
                  t("passwordReset.sendResetLink")
>>>>>>> main
                )}
              </Button>

              <Button
                variant="ghost"
                onClick={onBackToLogin}
                className="w-full text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
<<<<<<< HEAD
                Back to Login
=======
                {t("passwordReset.backToLogin")}
>>>>>>> main
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
<<<<<<< HEAD
                If an account with that email exists, you'll receive a password reset link shortly.
=======
                {t("passwordReset.emailSentMessage")}
>>>>>>> main
              </p>
            </div>
            
            <div className="space-y-3">
              <Button
                onClick={onBackToLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
<<<<<<< HEAD
                Back to Login
=======
                {t("passwordReset.backToLogin")}
>>>>>>> main
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;