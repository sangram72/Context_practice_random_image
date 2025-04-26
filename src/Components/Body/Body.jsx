import React, { useContext, useEffect, useState } from "react";
import Head from "../Head/Head";
import Tail from "../Tail/Tail";
import { choosecolor } from "../Context";
import load from "../../assets/load.gif";

const Body = () => {
  const { colors, conimage, setconimage } = useContext(choosecolor);
  const [loading, setloading] = useState(true);

  const fetchdetails = async () => {
    const baseurl = "https://dog.ceo/api/breeds/image/random";

    try {
      let response = await fetch(baseurl);
      let res = await response.json();
      // console.log(res);
      setconimage(res.message);

      setloading(false); // Set loading to false once the image is fetched
    } catch (error) {
      console.log("Error:", error);
      setloading(true); 
    }


  };

  useEffect(() => {
    if(conimage==null){
    fetchdetails();
    }else{
        setloading(false)
    }
  }, []);

  return (
    <>
      <Head />
      <br />
      <br />
      <div
        style={{
          height: "500px",
          backgroundColor: colors,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <img src={load} alt="Loading" style={{ height: "50%", width: "50%" }} />
        ) : (
          conimage && (
            <img src={conimage} alt="Random Dog" style={{ height: "80%", width: "50%" }} />
          )
        )}
      </div>

      <button onClick={() => { setloading(true); fetchdetails(); }}>
        Generate Random Dog Image
      </button>
      <br />
      <br />
      <Tail />
    </>
  );
};

export default Body;
