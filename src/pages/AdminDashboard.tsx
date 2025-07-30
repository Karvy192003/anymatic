import React, { useEffect, useState } from 'react';
import { firebaseDb } from '../services/firebaseDb';
import { User } from '../types';

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const allUsers = await firebaseDb.users.getAll();
      setUsers(allUsers);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePromote = async (userId: string, isAdmin: boolean) => {
    setActionLoading(userId);
    try {
      await firebaseDb.users.update(userId, { isAdmin: !isAdmin });
      fetchUsers();
    } catch (err: any) {
      setError(err.message || 'Failed to update user');
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (userId: string) => {
    setActionLoading(userId);
    try {
      await firebaseDb.users.delete(userId);
      fetchUsers();
    } catch (err: any) {
      setError(err.message || 'Failed to delete user');
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-anymate-light via-white to-anymate-primary/5 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-anymate-primary mb-6">Admin Panel</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading ? (
          <div className="text-center text-lg">Loading users...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Admin</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.isAdmin ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      className={`px-3 py-1 rounded text-white ${user.isAdmin ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'} transition`}
                      onClick={() => handlePromote(user.id, user.isAdmin)}
                      disabled={actionLoading === user.id}
                    >
                      {user.isAdmin ? 'Demote' : 'Promote'}
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white transition"
                      onClick={() => handleDelete(user.id)}
                      disabled={actionLoading === user.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
} 