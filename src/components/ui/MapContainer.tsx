const MapContainer = () => {
    return (
      <div className="MapContainerContainer  ">
        <div className="mapContent  w-full ">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.9244648579183!2d90.404680975472!3d23.79351800635456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79d95f2a455%3A0x7813656595af27a9!2sCoSpace%20Dhaka%20-%20Awal%20Centre%20Branch%20%3A%20Coworking%20space%2C%20Business%20center%2C%20Virtual%20Office%2C%20Serviced%20office!5e1!3m2!1sen!2sbd!4v1724926959427!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MapContainer;
  