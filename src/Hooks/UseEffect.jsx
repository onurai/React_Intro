import axios from 'axios';
import { useState, useEffect } from "react";
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react'
// import { PuffLoader } from 'react-spinners/PuffLoader';

// const override: CSSProperties = {
//     display: "block",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%)"
//   };

const UseEffect = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    
    
    useEffect(() => {
        const getUsers  = async () => {
            const response  = await axios.get('https://randomuser.me/api/?results=10')
            console.log(response);

            setUsers(response.data.results);
            setLoading(false);
        }
        
        getUsers();
    }, [])

    // const availableUser= users.filter(users.id.value != null && users.id.value !=null)

  return (
    <div>
        <p>Fetching data, Directly updating the DOM and Timers</p>

        {
            loading ? 
            <ChakraProvider>
              <Box>
              <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
                  position="absolute"
                  top='300%'
                  left='50%'
                  transform='translate(-50%, -50%)'
              />
              </Box>
            </ChakraProvider>
            : users.map(user => {
                return(
                  <div key={user.id.value}>
                    <div className="container">
                      <div className="row">
                        <div className="col-3">
                          <div className="card">
                            <img src={user.picture.medium} style={{objectFit:"cover"}} className="card-img-top" alt="..." />
                            <div claclassNamess="card-body">
                              <h5 className="card-title">{user.name.title}. {user.name.first} {user.name.last}</h5>
                              <p className="card-text">{user.email}</p>
                              <p>{user.location.city}, {user.location.country}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default UseEffect