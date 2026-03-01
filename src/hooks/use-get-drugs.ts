const useGetDrugs = () => {
  const drugs = [
    {
      id: 1,
      name: "Aspirin",
      category: "Pain Reliever",
      stock: 100,
      price: 9.99,
      status: "Active",
      manufacturer: "Bayer",
    },
    {
      id: 2,
      name: "Amoxicillin",
      category: "Antibiotic",
      stock: 50,
      price: 19.99,
      manufacturer: "Pfizer",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Lisinopril",
      category: "Blood Pressure",
      stock: 20,
      price: 14.99,
      manufacturer: "Merck",
      status: "Low Stock",
    },
  ];

  return { drugs };
};

export default useGetDrugs;
