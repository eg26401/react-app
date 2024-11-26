//making global 


import { create } from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  
  // Setter for users
  setUsers: (users) => set({ users }),

  // Create user
  createUser: async (newUser) => {
    if (!(newUser.name && newUser.email && newUser.password)) {
      return { success: false, message: 'Please fill in all fields' };
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: errorData.message || 'Failed to create user' };
      }
      
      const data = await res.json();
      
      set((state) => ({ users: [...state.users, data.data] }));
      
      return { success: true, message: 'User created successfully' };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, message: 'Network error' };
    }
  },

  // Fetch users
  fetchUsers: async () => {
    try {
      const res = await fetch("/api/users");
      
      if (!res.ok) throw new Error('Failed to fetch users');
      
      const data = await res.json();
      set({ users: data.data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  // Update user
  updateUsers: async (pid, updatedUser) => {
    try {
      const res = await fetch(`/api/users/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      
      const data = await res.json();
      
      if (!data.success) return { success: false, message: data.message };

      set((state) => ({
        users: state.users.map((user) =>
          user._id === pid ? data.data : user
        ),
      }));
      
      return { success: true, message: 'User updated successfully' };
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: false, message: 'Network error' };
    }
  },
}));

export default useUserStore;