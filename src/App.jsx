import React, { useState, useEffect } from "react";
import Table from "./Table";
import './App.css';

const App = () => {
  const [shipments, setShipments] = useState([]);
  const headers = ["Origin", "Destination", "Creation Time", "Assigned To", "Status", "Shipment Type"];

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/shipment_tracking");
        const result = await response.json();
        console.log(result);
        if (result.status) {
          setShipments(result.data);
        } else {
          console.error("Error fetching shipment data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching shipment data:", error);
      }
    };

    fetchShipments();
  }, []);

  const body = shipments.map((shipment, index) => {
    const origin = shipment.origins.length > 0 ? shipment.origins[0].origin : "N/A";
    const destination = shipment.tracking.length > 0 ? shipment.tracking[shipment.tracking.length - 1].destination : "N/A";
    const creationTime = shipment.origins.length > 0 ? new Date(shipment.origins[0].creationTime).toLocaleString() : "N/A";
    const assignedTo = shipment.assignedTo.length > 0 ? shipment.assignedTo[0].phone : "N/A";
    const status = shipment.status || "N/A";
    const shipmentType = shipment.shipmentType || "N/A";
    
    return (
      <tr key={index} className="border-b-[1px] border-zinc-300">
        <td className="p-3 text-left">{origin}</td>
        <td className="p-3 text-left">{destination}</td>
        <td className="p-3 text-left">{creationTime}</td>
        <td className="p-3 text-left">{assignedTo}</td>
        <td className="p-3 text-left">{status}</td>
        <td className="p-3 text-left">{shipmentType}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1 className="text-xl font-bold text-red-500">Shipment Tracking</h1>
      <Table headers={headers} body={body} />
    </div>
  );
};

export default App;
