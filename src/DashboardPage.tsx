import React, { useEffect, useState } from 'react';
import { productList } from './services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface DataItem {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

const ProductPage: React.FC = () => {
    const [productListData, setProductListData] = useState<DataItem[] | null>(null);
    const nav = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await productList();
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductListData(data.data);
                console.log(data.data, "fjisgyuhvb");
            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        };

        fetchData();
        // Cleanup function (optional)
        return () => {
            // Perform any cleanup here if needed
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        nav("/")
        toast.success("Logout")
    };

    return (
        <div className='productpage'>
            {/* Header */}
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Product Page</h1>
                    <button onClick={handleLogout} className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white">Logout</button>
                </div>
            </header>

            {/* Table */}
            <div className="container mx-auto mt-8">
                <table className="table-auto border-collapse border border-gray-700 mx-auto">
                    <thead>
                        <tr>
                            <th className="border border-gray-700 px-4 py-2">ID</th>
                            <th className="border border-gray-700 px-4 py-2">Name</th>
                            <th className="border border-gray-700 px-4 py-2">Year</th>
                            <th className="border border-gray-700 px-4 py-2">Color</th>
                            <th className="border border-gray-700 px-4 py-2">Pantone Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productListData && productListData.map((item) => (
                            <tr key={item.id}>
                                <td className="border border-gray-700 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.year}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
                                </td>
                                <td className="border border-gray-700 px-4 py-2">{item.pantone_value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default ProductPage;
