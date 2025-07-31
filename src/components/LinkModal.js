import React from 'react';

export default function LinkModal({ title, links, onClose }) {
    if (!links) {
        return null;
    }

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                <button className="closeButton" onClick={onClose}>&times;</button>
                <h3>{title}</h3>
                <ul className="modalLinkList">
                    {links.map((item, index) => (
                        <li key={index}>
                            <button
                                className="modalLinkButton"
                                onClick={() => { window.location.href = item.link; }}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
