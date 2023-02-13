import React, { useEffect, useState, useRef } from 'react'
import { Alert, Spinner } from "react-bootstrap";
import Footer from '../pages/layout/Footer';
import Header from '../pages/layout/Header';
import { useSearchParams } from 'react-router-dom';
import { postEmailVerification } from '../helper/axios';
// import { postEmailVerification } from "../../helper/axios";



const NewAccVerify = () => {


  // show Spinner first  
  // grab the query String÷
  // calll the api with the code and email
  // show the messafe if verified or not 

  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const isFetch = useRef(true);

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");

    //call the api
    callAPi({ email, emailVerificationCode });
    isFetch.current = false;
  }, [searchParams]);

  const callAPi = async (obj) => {
    if (isFetch.current) {
      const response = await postEmailVerification(obj);
      setResponse(response);
    }

  };

  return (
    <>
      <Header />
      <div className="main p-5 d-flex justify-content-center align-items-center">
        {response?.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response?.message}
          </Alert>
        ) : (
          <Spinner animation="border" variant="primary" className="fs-1" />
        )}
      </div>
      <Footer />
    </>








  )

}

export default NewAccVerify




