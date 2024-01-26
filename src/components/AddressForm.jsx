import { useState, useEffect, useRef } from "react";
import Alert from "./Alert";
import addressSchema from "../schema/addressInput";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [addrLine1, setAddrLine1] = useState("");
  const [addrLine2, setAddrLine2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [parseError, setParseError] = useState({});
  const [stateChanged, setStateChanged] = useState(false);
  const [alertSubmitted, setAlertSubmitted] = useState(false);
  const addressFilled = useRef({});

  const updateDB = () => {
    addressFilled.current = {
      name: name,
      pincode: pincode,
      state: state,
      addrLine1: addrLine1,
      addrLine2: addrLine2,
      phone: phone,
      email: email,
    };

    // TODO: POST addressFilled.current to backend

    setStateChanged(false);
    setAlertSubmitted(true);
  };

  const isEmptyState = () =>
    name === "" &&
    pincode === "" &&
    state === "" &&
    addrLine1 === "" &&
    addrLine2 === "" &&
    phone === "" &&
    email === "";

  const matchesLastSubmit = (currentState) =>
    JSON.stringify(addressFilled.current) === JSON.stringify(currentState);

  useEffect(() => {
    const currentAddress = {
      name: name,
      pincode: pincode,
      state: state,
      addrLine1: addrLine1,
      addrLine2: addrLine2,
      phone: phone,
      email: email,
    };
    const safeParse = addressSchema.safeParse(currentAddress);
    setParseError(safeParse.error?.format() || {});

    if (
      isEmptyState() ||
      matchesLastSubmit(currentAddress) ||
      !safeParse.success
    ) {
      setStateChanged(false);
    } else {
      setStateChanged(true);
    }
  }, [name, pincode, state, addrLine1, addrLine2, phone, email]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-screen-lg w-full">
        <div className="text-center text-2xl py-3">Enter new address</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-1">
            <div className="m-1 p-1">
              <input
                className="w-full p-2"
                type="text"
                placeholder="Name"
                maxLength="20"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={parseError["name"] ? "true" : "false"}
                aria-errormessage="e1"
              />
              <span id="e1" className="errormessage">
                {parseError["name"]?._errors[0]}
              </span>
            </div>
            <div className="m-1 p-1">
              <input
                className="w-full p-2"
                type="text"
                placeholder="Pincode"
                pattern="[0-9]{6}"
                maxLength="6"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                aria-invalid={parseError["pincode"] ? "true" : "false"}
                aria-errormessage="e2"
                required
              />
              <span id="e2" className="errormessage">
                {parseError["pincode"]?._errors[0]}
              </span>
            </div>
            <div className="m-1 p-1">
              <input
                className="w-full p-2"
                type="text"
                placeholder="State"
                maxLength="20"
                value={state}
                onChange={(e) => setState(e.target.value)}
                aria-invalid={parseError["state"] ? "true" : "false"}
                aria-errormessage="e3"
                required
              />
              <span id="e3" className="errormessage">
                {parseError["state"]?._errors[0]}
              </span>
            </div>
          </div>
          <div className="m-1">
            <div className="m-1 p-1">
              <input
                className="w-full p-2"
                type="text"
                placeholder="Address Line 1"
                maxLength="20"
                value={addrLine1}
                onChange={(e) => setAddrLine1(e.target.value)}
                aria-invalid={parseError["addrLine1"] ? "true" : "false"}
                aria-errormessage="e4"
              />
              <span id="e4" className="errormessage">
                {parseError["addrLine1"]?._errors[0]}
              </span>
            </div>
            <div className="m-1 p-1">
              <input
                className="w-full p-2"
                type="text"
                placeholder="Address Line 2"
                maxLength="20"
                value={addrLine2}
                onChange={(e) => setAddrLine2(e.target.value)}
                aria-invalid={parseError["addrLine2"] ? "true" : "false"}
                aria-errormessage="e5"
              />
              <span id="e5" className="errormessage">
                {parseError["addrLine2"]?._errors[0]}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mx-1 mb-1 p-1">
                <input
                  className="w-full p-2"
                  type="tel"
                  placeholder="Phone"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={parseError["phone"] ? "true" : "false"}
                  aria-errormessage="e6"
                  required
                />
                <span id="e6" className="errormessage">
                  {parseError["phone"]?._errors[0]}
                </span>
              </div>
              <div className="mx-1 mb-1 p-1">
                <input
                  className="w-full p-2"
                  type="email"
                  placeholder="Email"
                  maxLength="30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={parseError["email"] ? "true" : "false"}
                  aria-errormessage="e7"
                />
                <span id="e7" className="errormessage">
                  {parseError["email"]?._errors[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid m-1 p-2">
          <button
            className="w-full p-2"
            onClick={updateDB}
            disabled={!stateChanged}
          >
            Add address
          </button>
        </div>
      </div>
      {alertSubmitted && (
        <Alert
          message="Address added"
          onClose={() => setAlertSubmitted(false)}
        />
      )}
    </div>
  );
};

export default AddressForm;
