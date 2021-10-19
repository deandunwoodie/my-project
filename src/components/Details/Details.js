import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import FormLabel from "@mui/material/FormLabel";
import Create from "../Create/Create";
export default function Details(props) {
  console.log("from details");
  console.log(props);

  return (
    <div>
      <FormLabel component="legend">Driver Details</FormLabel>
      <FormLabel>
        {props.data.quotePrefix} {props.data.quoteFirstName}{" "}
        {props.data.quoteLastName}
      </FormLabel>

      <FormLabel component="legend">{props.data.quoteAddressLine1},</FormLabel>

      <FormLabel component="legend">{props.data.quoteAddressLine2},</FormLabel>

      <FormLabel component="legend">{props.data.quoteCity},</FormLabel>

      <FormLabel component="legend">{props.data.quotePostcode}</FormLabel>

      <FormLabel component="legend">{props.data.quoteMobile}</FormLabel>

      <FormLabel component="legend">Additional Drivers:</FormLabel>

      <FormLabel component="legend">
        Commercial Use? {props.data.quoteIsCommercial}
      </FormLabel>
      <FormLabel component="legend">
        Registered Outside State? {props.data.quoteIsRegistered}
      </FormLabel>
      <FormLabel component="legend">
        Vehicle Engine Size: {props.data.quoteEngineSize}cc
      </FormLabel>
      <FormLabel component="legend">
        Vehicle Value:
        <CurrencyFormat
          value={props.data.quoteVehicleValue}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </FormLabel>
    </div>
  );
}
