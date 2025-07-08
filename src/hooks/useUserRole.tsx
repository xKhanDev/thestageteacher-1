import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

export type UserRole = 'student' | 'teacher' | 'admin';

export function useUserRole() {
  const { user } = useAuth();
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        setRole(null);
        setLoading(false);
        return;
      }

      try {
        // First try to get role from profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
        }

        if (profile?.role) {
          setRole(profile.role as UserRole);
        } else {
          // Fallback to user_roles table
          const { data: userRoles, error: rolesError } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .order('role', { ascending: true })
            .limit(1);

          if (rolesError) {
            console.error('Error fetching user roles:', rolesError);
          }

          if (userRoles && userRoles.length > 0) {
            setRole(userRoles[0].role as UserRole);
          } else {
            // Default to student if no role found
            setRole('student');
          }
        }
      } catch (error) {
        console.error('Error in fetchUserRole:', error);
        setRole('student'); // Default fallback
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [user]);

  const hasRole = (requiredRole: UserRole | UserRole[]) => {
    if (!role) return false;
    
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(role);
    }
    
    return role === requiredRole;
  };

  const isAdmin = () => hasRole('admin');
  const isTeacher = () => hasRole(['teacher', 'admin']);
  const isStudent = () => hasRole('student');

  return {
    role,
    loading,
    hasRole,
    isAdmin,
    isTeacher,
    isStudent
  };
}