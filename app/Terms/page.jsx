import Image from 'next/image';
import React from 'react';


function Terms() {
    return (
        <div>
            <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">

                <div className="flex items-center mb-4">
                    <Image
                        src={"/2800741-200.png"}
                        alt="Warehouse_logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <h1 className="text-xl font-bold">Terms and Conditions</h1>
                </div>
                <div className="text-gray-700">
                    <p>
                        These terms and conditions govern your use of WarehouseConnect, an
                        intuitive surplus food distribution platform.
                    </p>
                    <p>
                        <strong>1. Use of Platform:</strong> WarehouseConnect allows surplus food storage
                        providers to connect with organizations in need, aiming to reduce food
                        waste and enhance the supply chain.
                    </p>
                    <p>
                        <strong>2. Account:</strong> You may need to create an account to access certain features
                        of the platform. You are responsible for maintaining the security of
                        your account and all activities that occur under your account.
                    </p>
                    <p>
                        <strong>3. Intellectual Property:</strong> All content and materials available on this
                        platform, including but not limited to text, graphics, logos, icons,
                        images, and software, are the property of WarehouseConnect.
                    </p>
                    <p>
                        <strong>4. Privacy:</strong> WarehouseConnect values your privacy. Please review our
                        Privacy Policy to understand how we collect, use, and disclose
                        information.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Terms;
