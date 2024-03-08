import React from "react";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
    return (
        <div>
            <div className="spinner-container">
                Učitavanje...
            </div>
            <div className="loading-spinner">
            </div>
        </div>
    );
}