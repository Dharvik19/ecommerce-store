import React from "react";

const Home = () => {
  const tourItems = [
    {
      date:"Jan 10",
      city:"DETROIT, MI",
      place:"DTE ENERGY MUSIC THEATRE"
    },
    {
      date:"Jan 21",
      city:"TOTONTO, ON",
      place:"BUDWEISER STAGE"
    },
    {
      date:"Jan 31",
      city:"BRISTOW, VA",
      place:"JIGGY LUBE LIVE"
    },
    {
      date:"Feb 1",
      city:"PHOENIX, AZ",
      place:"AK-CHIN PAVILION"
    },
    {
      date:"Feb 09",
      city:"LASVEGAS, NV",
      place:"T-MOBILE ARENA"
    },
    {
      date:"Feb 20",
      city:"PHOENIX, AZ",
      place:"AK-CHIN PAVILION"
    },
  ]
  return (
    <>
      
      <div
        className="bg-dark z-index-1"
        style={{ height: "20rem", backgroundColor: "red" }}
      >
        <div className="z-index-2" style={{ marginTop: "-3rem" }}>
          <section>
            <div
              style={{
                height: "50px",
                color: "white",
                width: "100%",
                fontSize: "40px",
              }}
              className="d-flex justify-content-center align-items-center bg-dark"
            >
              THE GENERICS
            </div>
          </section>

          <div className="d-flex justify-content-center align-items-center">
            <div style={{width:"24rem", height:"5rem"}} className=" d-flex justify-content-center align-items-center mt-4 border border-white">
            <h2 style={{color:"white",width:"auto"}} className="">Get our latest albums</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div style={{height:"7rem",width:"7rem",backgroundColor:"#808080"}} className="d-flex mt-4 justify-content-center align-items-center border border-black border-5 rounded-circle">
                <img style={{height:"8rem",transform: "translate(8%, 0%)"}} src="./images/play.svg" alt="play button"></img>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center m-4">Tours</h1>
      <div>
      {tourItems.map((item) => (
          <div style={{width:"90%"}} className="d-flex justify-content-between m-auto p-3 row border-bottom">
             <div style={{color:"#080808",fontSize:"1.5rem"}} className="col">{item.date}</div>
             <div style={{color:"#808080",fontSize:"1.5rem"}} className="col">{item.city}</div>
             <div style={{color:"#808080",fontSize:"1.5rem"}} className="col">{item.place}</div>
             <div className="col d-flex justify-content-end"><button style={{width:"8rem"}} className="btn btn-primary" >Buy tickets</button></div>
             
          </div>
        ))}
      </div>
      <div style={{backgroundColor:"#6699FF", height:"12rem",fontFamily: "Times New Roman, serif"}} className="d-flex justify-content-center align-items-center  mt-4">
        <div style={{fontSize:"4rem"}}>
          GENERICS
        </div>
      </div>
      
    </>
  );
};
export default Home;
