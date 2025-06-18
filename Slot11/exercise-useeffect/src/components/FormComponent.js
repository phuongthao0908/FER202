import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

function FormComponent() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [countryTouched, setCountryTouched] = useState(false);
  const [agreeTouched, setAgreeTouched] = useState(false);

  const isNameValid = name.trim().length >= 3;
  const isGenderValid = gender !== "";
  const isCountryValid = country !== "";
  const isAgreeValid = agree;

  const isFormValid = isNameValid && isGenderValid && isCountryValid && isAgreeValid;

  return (
    <Form>
      {/* Name */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          isInvalid={nameTouched && !isNameValid}
          isValid={nameTouched && isNameValid}
        />
        <Form.Control.Feedback type="invalid">
          Name must be at least 3 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Gender */}
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <div onBlur={() => setGenderTouched(true)}>
          <Form.Check
            type="radio"
            inline
            label="Male"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type="radio"
            inline
            label="Female"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            type="radio"
            inline
            label="Other"
            name="gender"
            value="Other"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {!isGenderValid && genderTouched && (
          <div className="text-danger mt-1">Please select a gender.</div>
        )}
      </Form.Group>

      {/* Country */}
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => setCountryTouched(true)}
          isInvalid={countryTouched && !isCountryValid}
          isValid={countryTouched && isCountryValid}
        >
          <option value="">Select country</option>
          <option value="Hanoi">Hà Nội</option>
          <option value="Da Nang">Đà Nẵng</option>
          <option value="Ho Chi Minh">TP. Hồ Chí Minh</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Terms and Conditions */}
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          onBlur={() => setAgreeTouched(true)}
          isInvalid={agreeTouched && !isAgreeValid}
        />
        {!isAgreeValid && agreeTouched && (
          <div className="text-danger mt-1">
            You must agree to the terms and conditions.
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;
