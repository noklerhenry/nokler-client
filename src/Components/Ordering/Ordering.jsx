import React from "react";



export default function Ordering(){

    return(
        <div className="orderings">
                <h5>Order by Rating</h5>
                    <label>Most popular</label>
                        <input
                            type="checkbox"                             
                        />
                    <label>Less popular</label>
                        <input
                            type="checkbox"                               
                        />
                <h5>Order by Release</h5>
                    <label>Newest</label>
                        <input
                            type="checkbox"                             
                        />
                    <label>Older</label>
                        <input
                            type="checkbox"                               
                        />
                <h5>Order by Price</h5>
                    <label>Most expensive</label>
                        <input
                            type="checkbox"                             
                        />
                    <label>Most cheap</label>
                        <input
                            type="checkbox"                               
                        />
                    <label>In Offer</label>
                        <input
                            type="checkbox"                               
                        />
                <h5>Order by alphabet</h5>
                    <label>A-Z</label>
                        <input
                            type="checkbox"                             
                        />
                    <label>Z-A</label>
                        <input
                            type="checkbox"                               
                        />
        </div>
    )
}