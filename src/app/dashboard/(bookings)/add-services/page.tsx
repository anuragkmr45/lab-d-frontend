// 'use client';

// import { useState, useEffect } from 'react';
// import { getAllServices } from '@/services/service';
// import { useSearchParams } from 'next/navigation';

// type ServiceType = {
//     serviceId: number;
//     serviceName: string;
//     serviceDesc: string;
//     testParameters: string[],
//     sampleType: string,
//     tubeType: string,
//     packageIncludes: string,
//     discountedPrice: string,
//     discountPercentage: string
// }

// const AddServices = () => {
//     const searchParams = useSearchParams();
//     const serviceId = searchParams.get('serviceId');
//     const locationId = searchParams.get('locationId');

//     const [services, setServices] = useState([]);
//     const [selectedServices, setSelectedServices] = useState([]);

//     useEffect(() => {
//         const handleGetAllServices = async () => {
//             try {
//                 const res = await getAllServices();
//                 setServices(res);
//             } catch (error) {
//                 console.error('Error while fetching all services:', error);
//             }
//         };

//         handleGetAllServices();
//     }, []);

//     const handleServiceChange = (index: number, value: string) => {
//         const updatedServices = [...selectedServices];
//         updatedServices[index].id = value;
//         setSelectedServices(updatedServices);
//     };

//     const addNewDropdown = () => {
//         setSelectedServices([...selectedServices, { id: null }]);
//     };

//     const logSelectedServices = () => {
//         console.log('Selected Services:', selectedServices.map(s => s.id));
//     };

//     return (
//         <div>
//             <h1>Add Services</h1>
//             {selectedServices.map((service, index) => (
//                 <div key={index} style={{ marginBottom: '10px' }}>
//                     <select
//                         value={service.id || ''}
//                         onChange={(e) => handleServiceChange(index, e.target.value)}
//                         style={{ padding: '8px', fontSize: '16px' }}
//                     >
//                         <option value="">Select a service</option>
//                         {services.map((serviceData:ServiceType ) => (
//                             <option key={serviceData.serviceId} value={serviceData.serviceId}>
//                                 {serviceData.serviceName}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ))}
//             <button
//                 onClick={addNewDropdown}
//                 style={{
//                     marginRight: '10px',
//                     padding: '8px 16px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                 }}
//             >
//                 Add Another Service
//             </button>
//             <button
//                 onClick={logSelectedServices}
//                 style={{
//                     padding: '8px 16px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                     backgroundColor: '#007BFF',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '4px',
//                 }}
//             >
//                 Log Selected Services
//             </button>
//         </div>
//     );
// };

// export default AddServices;
