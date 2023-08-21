import PublicLayout from "../../layout";
import AddEmployee from "./AddEmployee";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FunctionAddUser } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

export default function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const data = {
      id: crypto.randomUUID(),
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      job: values.job.trim(),
      createdAt: new Date(),
    };
    try {
      dispatch(FunctionAddUser(data));
      navigate("/employee");
    } catch (err) {
      toast.error("Fail to update.");
    }
  };
  return (
    <>
      <PublicLayout>
        <AddEmployee handleSubmit={handleSubmit} />
      </PublicLayout>
    </>
  );
}
