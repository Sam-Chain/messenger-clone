import React, { forwardRef } from 'react'
import './Message.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Card, CardContent, Typography } from '@material-ui/core';

const Message = forwardRef( ({username, message,}, ref) => {
    const isUser = username == message.username;
    return (
        // <div className={`message ${isUser && 'message__user'}`}>
        //     <Card className={isUser? "message__userCard" : "message__guestCard"}>
        //     <CardContent>
        //         <Typography variant="h5" component="h2" color="white">
        //             {!message.message?  <>
        //                             <h6>{message.username}</h6> 
        //                             <ThumbUpAltIcon color="primary" fontSize="large"/> 
        //                         </>
        //                         :   <>
        //                                 <h6>{message.username}</h6>           
        //                                 <p>{message.message}</p>
        //                             </>
        //                 }
        //         </Typography>
        //     </CardContent>
        //     </Card>
        // </div>
        <Card ref={ref} className={`message ${isUser && 'message__user'}`}>
            <CardContent>
                <Typography variant="h5" component="h2" color="white">
                    {!message.message?
                        <h6 style={{disply: "flex", "align-items": "center"}}>
                            {!isUser && `${message.username}:`} 
                            <ThumbUpAltIcon color="primary" fontSize="large"/> 
                        </h6>
                        : <p>{!isUser && `${message.username || 'Unknown'}:`} {message.message}</p>
                    }
                </Typography>
            </CardContent>
            </Card>
        
    )
})

export default Message
