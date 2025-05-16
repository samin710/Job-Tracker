import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ComDetailsCard from "../components/ComDetailsCard/ComDetailsCard";

const CompanyDetails = () => {
  const [company, setCompany] = useState([]);
  const { id } = useParams();

  const data = useLoaderData();

  useEffect(() => {
    const selectedCom = data.filter((com) => com.id === parseInt(id));
    setCompany(selectedCom);
  }, [data, id]);

  return (
    <div className="px-5 md:px-12 lg:px-20 py-3 md:py-5 lg:py-9">
      {company.map((com) => (
        <ComDetailsCard key={com.id} com={com}></ComDetailsCard>
      ))}
    </div>
  );
};

export default CompanyDetails;
