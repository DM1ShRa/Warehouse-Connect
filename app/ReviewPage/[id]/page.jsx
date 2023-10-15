// Import necessary components and styles
"use client"
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { checkout } from '@lib/checkout';


export default function Review({ params }) {
  const [value, setValue] = useState(2);
  const [data, setData] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/prompt/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [params.id]);

  const handleVerification = async () => {
    debugger;
    try {
      console.log(params.id);
      const price = document.getElementById("price_string").value;
      const response = await fetch(`/api/prompt/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          price: price,
        })
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckout = async () => {
    debugger;

    // const shipping_address = document.getElementById("shipping_address").value;
    try {


      const response = await fetch('/api/order/new', {
        method: 'POST',
        body: JSON.stringify({
          owner: data.creator._id,
          customer: session?.user.id,
          product: data._id,
        })
      });




      if (response.ok) {
        await fetch(`/api/prompt/${params.id}`, {
          method: 'DELETE',
        });

        await checkout({
          lineItems: [{ price: data.priceString, quantity: 1 }]
        });

      }
    } catch (error) {

    }






  }

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow-lg bg-white mt-6 flex">
      {data && (
        <>
          <img src={data.image} alt="Image" className="w-32 h-32 rounded-lg mr-4" />
          <div className="w-3/4">
            <h1 className="text-3xl font-bold mb-2">Details: {data.prompt}</h1>
            <div className="mb-2">Location: {data.location}</div>
            <div className="mb-2">Warehouse Name: {data.warehouseName}</div>
            <div className="mb-2">Creator's Name: {data.creator.name}</div>
            <div className="mb-2">Current Storage Status: {data.currentStorageStatus}</div>
            <div className="mb-2">Build Date: {data.buildDate ? new Date(data.buildDate).toLocaleDateString() : 'N/A'}</div>

            <div className="mb-2">Storage Capacity: {data.storageCapacity}</div>
            <div className="mb-2">Available Storage: {data.availableStorage}</div>
            <div className="mb-2">Description: {data.description}</div>
            <div className="mb-2">Goods Type: {data.goodsType}</div>

            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            {
              (session?.user.email == "2021.abhishek.jadhav@ves.ac.in") ? (
                <>
                  <li><strong>Enter price-string:</strong></li>
                  <input type="text" name="price_string" id="price_string" />
                </>

              ) : (<>
                {/* <li><strong>Enter Delivery Address:</strong></li>
                <input type="text" name="shipping_address" id="shipping_address" /> */}

              </>)
            }
            <div className="product-actions">
              {
                (session?.user.email == "2021.abhishek.jadhav@ves.ac.in") ? (
                  <button id="verify-btn" onClick={handleVerification} className="btn explore_btn">Verify</button>
                ) : (<button id="buy-btn" onClick={handleCheckout} className="btn explore_btn">Proceed to pay</button>)
              }

            </div>
          </div>
        </>
      )}
    </div>
  );
}
