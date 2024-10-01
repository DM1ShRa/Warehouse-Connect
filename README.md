# Warehouse Connect

Warehouse Connect is a web-based platform designed to connect warehouses across the country with government agencies and business owners to reduce food and product wastage. This project aims to optimize the utilization of available warehouse spaces for storing surplus goods, thereby mitigating supply chain inefficiencies.

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Project Overview
The primary motivation behind Warehouse Connect is to provide a solution for the large-scale food and product wastage caused by inefficient supply chain and warehouse management systems. The platform allows warehouse owners to list available storage spaces and facilitates government agencies and business owners to reserve these spaces for their surplus goods, ensuring they are stored safely and efficiently.

By connecting available storage with demand, Warehouse Connect minimizes economic losses and contributes to a more sustainable food supply chain.

### Goals:
- **Reduce food and product wastage** by improving warehouse utilization.
- **Optimize food distribution** through better management of surplus storage.
- **Promote sustainability** by reducing resource waste and carbon footprint.

## Key Features
- **User Registration & Authentication**: Secure user accounts with the ability to list warehouses or find and reserve storage spaces.
- **Real-Time Warehouse Search**: Locate nearby warehouses with available storage capacity based on geolocation.
- **Inventory Management**: Track, update, and manage stored goods within the platform.
- **Booking & Reservations**: Easy booking process for reserving warehouse spaces.
- **Data Analytics**: Insights into storage utilization trends, warehouse performance, and inventory management.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Database**: MySQL or PostgreSQL (depending on deployment)
- **Maps API**: Google Maps API for geolocation services
- **Authentication**: OAuth2 for secure user authentication
- **Hosting**: Deployed using AWS or any cloud provider

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/warehouse-connect.git
    cd warehouse-connect
    ```

2. **Install the backend dependencies:**
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. **Set up environment variables:**
    Create a `.env` file in the backend directory and add necessary environment variables like:
    - `DB_URI` for the database connection string
    - `GOOGLE_MAPS_API_KEY` for map services
    - `SECRET_KEY` for Flask session management

4. **Install the frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```

5. **Run the development servers:**
    For the backend:
    ```bash
    cd backend
    flask run
    ```
    For the frontend:
    ```bash
    cd frontend
    npm start
    ```

6. **Access the application**: Visit `http://localhost:3000` to use the platform.

## Usage

1. **Sign Up/Login**: Users can create accounts or log in to the platform.
2. **List Warehouse**: Warehouse owners can list their available spaces by providing location, capacity, and pricing.
3. **Search Warehouses**: Users can search for available warehouse spaces near them using the integrated Google Maps API.
4. **Make Reservations**: Users can reserve spaces for storing their surplus goods based on availability and storage requirements.
5. **Track Inventory**: Manage and monitor goods stored in the reserved warehouses through the platform’s dashboard.

## Contributors
- Abhishek Jadhav
- Darash Mishra
- Aaqueeb Pinjari
- Kanak Pendse

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
