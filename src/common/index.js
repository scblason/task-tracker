import React from "react";

export const Loading = () => <h5 style={{textAlign: 'center'}}>Loading...</h5>;

export const ErrorMessage = ({ error }) => (
  <h3 style={{ color: "red", textAlign: 'center' }}>{error}</h3>
);
