//making global

import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

interface UserStore {
  users: User[];
  setUsers: (users: User[]) => void;
  createUser: (
    newUser: Omit<User, "_id">
  ) => Promise<{ success: boolean; message: string }>;
  fetchUsers: () => Promise<void>;
  updateUsers: (
    pid: string,
    updatedUser: Partial<User>
  ) => Promise<{ success: boolean; message: string }>;
}

const UseUserStore = create<UserStore>((set) => ({
  users: [],

  // Setter for users
  setUsers: (users: any) => set({ users }),

  // Create user
  createUser: async (newUser: { name: any; email: any; password: any }) => {
    if (!(newUser.name && newUser.email && newUser.password)) {
      return { success: false, message: "Please fill in all fields" };
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
        return {
          success: false,
          message: errorData.message || "Failed to create user",
        };
      }

      const data = await res.json();

      set((state: { users: any }) => ({ users: [...state.users, data.data] }));

      return { success: true, message: "User created successfully" };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, message: "Network error" };
    }
  },

  // Fetch users
  fetchUsers: async () => {
    try {
      const res = await fetch("/api/users");

      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      set({ users: data.data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  // Update user
  updateUsers: async (pid: any, updatedUser: any) => {
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

      set((state: { users: any[] }) => ({
        users: state.users.map((user) => (user._id === pid ? data.data : user)),
      }));

      return { success: true, message: "User updated successfully" };
    } catch (error) {
      console.error("Error updating user:", error);
      return { success: false, message: "Network error" };
    }
  },
}));

export default UseUserStore;
