import React, { Component } from 'react';
import axios from 'axios';
import '../style/table.css';
import '../style/scrollable.css';
const BACKEND_URL = require('./_URL_Backend');

export class viewSendReplacementRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            requests: []
        }

        axios.get(BACKEND_URL+'academicMember/viewSendReplacementRequest',{headers:{authorisation:localStorage.getItem('jwtToken')}})
            .then(response => {
                console.log(response.data)
                if (response.data.requests.length > 0) {
                    this.setState({
                        requests: response.data.requests,
                        message: response.data.error
                    })
                }
                if (!response.data.requests.length) {
                    this.setState({
                        requests: [response.data.requests],
                        message: response.data.error

                    })
                }
            }, error => {
                console.log(error);
            });
    }   
    render() {
       
        return (
            <div className='table-loc'>
                <h3>Sent Replacement Requests:</h3>
                    <table className='table-hover'>
                        <thead>
                            <tr>
                            <th>Request ID</th>
                                <th>Sending Staff ID</th>
                                <th>Receiving Staff ID</th>
                                <th>Type</th>
                                <th>Request Date</th>
                                <th>Date Sent</th>
                                <th>Status </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.requests.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item['_id']}</td>
                                        <td>{item['sending_staff']}</td>
                                        <td>{item['receiving_staff']}</td>
                                        <td>{item['request_type']}</td>
                                        <td>{item['request_date']}</td>
                                        <td>{item['date_sent']}</td>
                                        <td>{item['status']}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div>
                    <br />
                    <h3>{this.state.message}</h3>
                </div>
            </div>
        )
    }
}

export default viewSendReplacementRequest



/*
import React from 'react';

function viewSendReplacementRequest() {
  return (
    <div className='viewSendReplacementRequest'>
      <h1>viewSendReplacementRequest</h1>
    </div>
  );
}

export default viewSendReplacementRequest;
*/
