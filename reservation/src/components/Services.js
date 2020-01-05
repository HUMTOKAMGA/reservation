import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttle, FaBeer} from "react-icons/fa"
export default class Services extends Component {
    state= {
        services:[
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info
            }
        ]
    }
  render() {
    return (
      <div>
          <Title title="services" />
            Hello from service 
            
      </div>
    )
  }
}
