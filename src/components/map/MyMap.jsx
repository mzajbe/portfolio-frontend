
  

const MyMap = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">  
            <h2 className="text-white text-xl mb-2">Where I Live</h2>  
            <iframe  
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58414.55693269366!2d90.45573850576017!3d23.786225837832546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f83f511d3d%3A0xe2192389e17049f0!2sNotun%20Bazar!5e0!3m2!1sen!2sbd!4v1732193268191!5m2!1sen!2sbd"  
                width="100%"  
                height="450"  
                style={{ border: 0 }}  
                allowFullScreen=""  
                loading="lazy"  
                className="rounded-2xl"  
            ></iframe>  
        </div>  
    );
};

export default MyMap;