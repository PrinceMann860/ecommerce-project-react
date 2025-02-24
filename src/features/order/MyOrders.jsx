import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const order = {
    id: 1,
    date: '2023-11-22',
    total: 199.99,
    status: 'Shipped',
    action: 'Track',
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // Added image URL
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-amber-400 text-black py-4 px-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <img src={order.imageUrl} alt="Order Image" className="w-48 h-48 object-cover rounded-lg" />
          </div>
          <div>
            <table className="min-w-full border border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                    <button>{order.action}</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Shop Again Button */}
            <div className="mt-6">
              <Link to="/shop">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-72">
                  Shop Again
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;
