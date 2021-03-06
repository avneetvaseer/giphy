import React, {useEffect, useState} from "react";
import axios from "axios";


const Giphy = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
             const results= await axios("https://api.giphy.com/v1/gifs/trending",{ 
                  params:{
                      api_key: 'ZDkiAvxSyrOb9OFqamIm5p7icTL8X5YE'

               }
               });
               console.log(results);
               setData(results.data.data);
        }

        fetchData ();
    }, []);

    const rendergifs = () =>{ 
        return data.map(el=>{
            return (
                <div key = {el.id} className = "gif">
                <img src = {el.images.fixed_height.url} />
                </div>
            );
        });

    };
    return <div className="container gifs">{rendergifs()}</div>;
};

export default Giphy;