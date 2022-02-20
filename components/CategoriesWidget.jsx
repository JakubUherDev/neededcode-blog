import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Link from 'next/link'

const CategoriesWidget = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories.map(obj => obj.categories).map(o => o[0]));
        });
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
            {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                    {
                        <span className={getBadge(category, index, categories)}>{category.name}</span>
                    }
                </Link>
            ))}
        </div>
    );
};

export default CategoriesWidget;

export function getBadge(category, index, categories) {
    switch (category.badgeColor) {
        case 'primary':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded`
        case 'secondary':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded`
        case 'success':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded`
        case 'danger':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded`
        case 'warning':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded`
        case 'info':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded`
        case 'light':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded`
        case 'dark':
            return `mx-1 cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} mb-3 text-xs inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded`

        default:
            return `cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`

    }
}