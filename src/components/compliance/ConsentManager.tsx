import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, UserCheck, Database, Eye } from "lucide-react";

interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const ConsentManager = () => {
  const [showManager, setShowManager] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    marketing: false,
    functional: true
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem('consent-preferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem('consent-preferences', JSON.stringify(preferences));
    localStorage.setItem('consent-timestamp', new Date().toISOString());
    setShowManager(false);
  };

  const consentItems = [
    {
      key: 'functional' as keyof ConsentPreferences,
      icon: Shield,
      title: 'Functional Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      required: true
    },
    {
      key: 'analytics' as keyof ConsentPreferences,
      icon: Database,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting information anonymously.',
      required: false
    },
    {
      key: 'marketing' as keyof ConsentPreferences,
      icon: Eye,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      required: false
    }
  ];

  if (!showManager) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowManager(true)}
        className="fixed bottom-4 right-4 z-40 bg-background/95 backdrop-blur-sm"
      >
        <UserCheck className="h-4 w-4 mr-2" />
        Privacy Settings
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-background">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Manage Your Privacy Preferences</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Control how we use cookies and process your data. You can change these settings at any time.
          </p>

          <div className="space-y-4">
            {consentItems.map((item) => (
              <div key={item.key} className="flex items-start space-x-3 p-4 border rounded-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{item.title}</h3>
                    {item.required ? (
                      <span className="text-sm text-green-600 font-medium">Required</span>
                    ) : (
                      <Checkbox
                        checked={preferences[item.key]}
                        onCheckedChange={(checked) =>
                          setPreferences(prev => ({ ...prev, [item.key]: !!checked }))
                        }
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-4">
            <Button variant="outline" onClick={() => setShowManager(false)}>
              Cancel
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setPreferences({ analytics: false, marketing: false, functional: true });
                  savePreferences();
                }}
              >
                Reject All
              </Button>
              <Button onClick={savePreferences}>
                Save Preferences
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsentManager;