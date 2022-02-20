import React, {useEffect, useState} from 'react';
import {getAllCategories, getCategories} from "../services";
import TailwindColor from '../node_modules/@videsk/tailwind-random-color/dist/tailwind-random-color.min'

const randomColor = require('randomcolor');

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((newCategories) => {
            setCategories(newCategories.categories);
        });
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 grid-cols-1 gap-2">
                {categories.map((category, index) => {
                    return <TagGridItem key={index} category={category}/>
                })}
            </div>
        </div>
    );
};

export default Categories;


const TagGridItem = ({category}) => {


    const pickColor = () => {
        const options = {
            colors: ['gray', 'blue', 'red', 'stone', 'orange', 'amber', 'yellow', 'lime', 'green', 'teal', 'sku', 'violet', 'fuchsia', 'pink', 'rose'],
            range: [1,4],
            prefix: 'bg'
        };
        return new TailwindColor(options).pick()
    }
    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{category.name}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {category.description.text}
                </p>
                    <div className="flex flex-wrap gap-1">
                    { category.tags.length > 0 && category.tags.map((tag, index) => {
                        return <div style={{backgroundColor: randomColor({luminosity: 'light'})}} key={index} className={`px-3 py-1 rounded-2xl text-gray-800 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease`}>
                                {tag.name}

                               </div>
                    })}
                </div>
            </div>
        </div>
    );
};

