# **Furniro: A Premium Furniture Marketplace**

Welcome to **Furniro**, a premium furniture marketplace designed to bring high-quality wooden furniture to your doorstep. This project is a culmination of six days of intense planning, development, testing, and deployment, resulting in a fully functional e-commerce platform. Below is a detailed overview of the journey from ideation to deployment.

---

## **Table of Contents**
1. [Introduction](#introduction)
2. [Business Goals](#business-goals)
3. [API Integration](#api-integration)
5. [Dynamic Frontend Development](#dynamic-frontend-development)
6. [Testing & Error Handling](#testing--error-handling)
7. [Deployment](#deployment)

---

## **Introduction**
**Furniro** is a niche e-commerce platform specializing in premium wooden furniture. It offers a wide range of products, including chairs, beds, sofas, and tables, categorized into Dining, Living, and Bedroom collections. The platform aims to solve common pain points such as inconvenient store visits, high delivery costs, and the hassle of furniture placement by providing free doorstep delivery and placement services.

---

## **Business Goals**
### **1. Problem Solving**
- **Convenience:** Customers can browse and purchase furniture from the comfort of their homes.
- **Comparison:** A comprehensive catalog allows users to compare products easily.
- **Free Services:** Free delivery and furniture placement eliminate additional costs and effort.

### **2. Target Audience**
- Homeowners, young professionals, families, interior designers, and budget-conscious buyers.

### **3. Unique Selling Points**
- **Free Shipping & Placement:** No additional costs for delivery or setup.
- **Affordable Premium Quality:** High-quality furniture at competitive prices.

---

## **Technical Planning**
### **1. Data Schema**
- **Entities:** Admin, Users/Customers, Products, Orders, Cart.
- **Relationships:** Defined relationships between entities to ensure seamless data flow.
- **Key Fields:** Identified critical fields for each entity, such as `ProductID`, `CustomerID`, and `OrderID`.

### **2. System Architecture**
- **Frontend:** Built with **Next.js** for a user-friendly, responsive interface.
- **Backend:** Managed using **Sanity CMS** for inventory, users, and orders.
- **Third-Party APIs:** Integrated **Stripe** for payments and a **Shipment API** for order tracking.

### **3. API Endpoints**
- Designed and documented API endpoints for `/admin`, `/products`, `/my-orders`, `/order`, and `/user`.

### **4. Sanity Schema**
- Created schemas for **Admin**, **Customer**, **Product**, **Order**, and **Cart** to structure data in Sanity CMS.

---

## **API Integration**
### **1. Data Migration**
- Fetched product data from the provided API and migrated it to Sanity CMS.
- Used **importData.mjs** script to automate data migration.

### **2. Frontend Integration**
- Implemented real-time data fetching using Sanity client.
- Configured image optimization and domain settings in **next.config.js**.

### **3. Key Features**
- **Product Listing:** Dynamically fetched and displayed products with pagination.
- **Search & Filters:** Enabled users to search and filter products.
- **Cart & Checkout:** Built a fully functional cart system with **Context API** and **local storage**.

---

## **Dynamic Frontend Development**
### **1. Features Delivered**
- **Product Listing Page:** Real-time data fetching, pagination, and responsive design.
- **Product Details Page:** Detailed product information, related products, and add-to-cart functionality.
- **Cart Functionality:** Add, remove, and update cart items with persistent storage.
- **Checkout Page:** Form validation using **react-hook-form** and order placement notifications.

### **2. Technologies Used**
- **Next.js:** For server-side rendering and dynamic routing.
- **Tailwind CSS:** For responsive and reusable components.
- **Sanity CMS:** For backend and database management.

---

## **Testing & Error Handling**
### **1. Functional Testing**
- Tested core features like product listings, cart operations, and checkout processes.
- Ensured all pages loaded correctly and navigation was seamless.

### **2. Error Handling**
- Added error messages for scenarios like empty carts, missing products, and network failures.
- Implemented fallback UIs for server failures.

### **3. Performance Testing**
- Achieved high scores in **Lighthouse Report**:
  - **Performance:** 100
  - **Accessibility:** 94
  - **Best Practices:** 100
  - **SEO:** 100

### **4. Cross-Browser & Device Testing**
- Tested on **Brave**, **Chrome**, and **Firefox** for consistency.
- Ensured responsiveness on **desktop** and **mobile** devices.

---

## **Deployment**
### **1. Staging Environment**
- Configured environment variables in **Vercel**.
- Connected the **GitHub repository** for automated deployments.
- Resolved **CORS policy errors** by updating Sanity project settings.

### **2. Challenges & Solutions**
- **Environment Variables:** Verified and fixed misconfigured variables.
- **API Integration:** Debugged and resolved data fetching issues.
- **Performance Optimization:** Implemented lazy loading and image optimizations.

### **3. Final Deployment**
- Successfully deployed the application to **Vercel**.
- Conducted final tests to ensure a smooth user experience.

---

## **Conclusion**
The **Furniro** project has been an incredible journey, from conceptualizing a niche e-commerce platform to deploying a fully functional marketplace. Key achievements include:

- **Dynamic Data Handling:** Real-time data fetching and routing.
- **User Experience Enhancements:** Search, filters, pagination, and related products.
- **Frontend Optimization:** Improved performance with lazy loading and image optimization.
- **Responsive Design:** Ensured a seamless experience across devices.

This project has not only delivered a robust e-commerce platform but also deepened my understanding of modern web development practices. The skills and insights gained will undoubtedly be beneficial for future projects, ensuring the ability to build scalable and user-centric web applications.

---

## **Live Demo**
Explore the live version of **Furniro** [https://e-commerce-hackathon-2-m1p8.vercel.app/](#)

---

## **Acknowledgments**
Special thanks to the **Hackathon Team (Sir Ameen Alam, Sir Ali Jawwad, Senior Students and rising stars)** for providing the opportunity to work on this project and to the **Sanity** and **Vercel** teams for their excellent documentation and support.

---

## **Contact**
For any inquiries or feedback, feel free to reach out:
- **Email:** [muhammadfuzail591@gmail.com](#)
- **GitHub:** [muhammadfuzail591](#)

---

🚀 **Thank you for visiting Furniro! Happy shopping!** 🚀