import React from "react";
import ReactDom from "react-dom";

export default class ViewProduct extends React.Component{
    render() {
      return <>


      <div className="container">
      <table className="table table-striped p-5">
        <thead className="tbl bg-dark text-white">
        <tr>
            <th>SR.NO</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
            <th>DELETE</th>
            <th>UPDATE</th>
        </tr>
        </thead>
        <tbody>


        </tbody>



      </table>
      </div>
      </>
    }
}