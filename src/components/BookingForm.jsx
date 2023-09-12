import React from "react";
import { useForm } from "react-hook-form";
import { Typography, Input, Button } from "@mui/material";
import toast from "react-hot-toast";
import useStore from "../store";

const BookingForm = ({ hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addReservation = useStore((state) => state.addReservation);

  const onSubmit = (data) => {
    addReservation(hotel, data);
    toast.success("Reservation made!");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register("startDate", { required: true })} />
      {errors.startDate && (
        <Typography style={{ color: "red" }}>Start Date is required</Typography>
      )}
      <br />
      <Input type="date" {...register("endDate", { required: true })} />
      {errors.endDate && (
        <Typography style={{ color: "red" }}>End Date is required</Typography>
      )}
      <Button variant="contained" type="submit">
        Make Reservation
      </Button>
    </form>
  );
};

export default BookingForm;
