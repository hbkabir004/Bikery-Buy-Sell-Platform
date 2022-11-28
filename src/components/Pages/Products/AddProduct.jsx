import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'user';
        const email = user?.email || 'unregistered';
        const img = form.img.value;
        const id = form.id.value;
        const itemName = form.name.value;
        const price = form.price.value;
        const text = form.message.value;
        const location = form.location.value;
        const condition = form.condition.value;
        const mobile = form.mobile.value;
        const buy = form.buy.value;

        const newProduct = {
            name: itemName,
            product_id: id,
            img,
            description: text,
            price,
            location,
            condition,
            mobile,
            buy
        }
        console.log(newProduct)

        fetch('https://server-rose.vercel.app/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('New Product uploaded successfully')
                    form.reset();
                }
            })
            .catch(er => toast.error(er));

    }
    return (
        <div className="flex flex-col lg:w-2/4 sm:w-full mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-slate-400 my-10">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center mb-5">Your opinion matters!</h2>
                <p className="text-xl font-semibold text-center mb-5">Add Your desire Products</p>

                <form onSubmit={handleProduct} className="flex flex-col w-full">
                    <div class="mb-6">
                        <input type="text" name="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Product ID (start from 21)" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="itemName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Product Name" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="$Price" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="condition" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Condition Type (Excellent/Good/Fair)" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="img" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Photo URL" />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Mobile Number" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Location" required />
                    </div>
                    <div class="mb-6">
                        <input type="text" name="buy" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Year of Purchase" required />
                    </div>
                    <textarea name="message" rows="3" placeholder="Description..." className="p-4 rounded-md resize-none text-gray-700 bg-gray-50"></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md bg-magenda-100 hover:bg-gray-700 text-white">Add Product</button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <Link rel="noopener noreferrer" to='/' className="text-sm font-semibold hover:text-white">Maybe later</Link>
            </div>
        </div>
    );
};

export default AddService;
