import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { InputPicker } from "rsuite";

const Iconfile = () => {

    const allIcons = Object.keys(FaIcons).map((key) => ({
        value: key,
        label: key.replace("Fa", ""),
        icon: React.createElement(FaIcons[key]),
    }));

    const [selected, setSelected] = useState(null);
    const submit = () => {
        if (selected) {
            const iconComponent = React.createElement(FaIcons[selected]);
            console.log("Selected Icon Component:", iconComponent);
            alert(`You have selected the icon: ${selected}`);
        } else {
            alert("No icon selected");
        }
    };
        return (
            <div>
                <InputPicker
                    data={allIcons}
                    value={selected}
                    onChange={setSelected}
                    style={{ width: 250 }}
                    placeholder="Select an icon"
                    renderMenuItem={(label, item) => (
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {item.icon} {label}
                        </div>
                    )}
                    renderValue={(value, item) => (
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {item?.icon} {item?.label}
                        </div>
                    )}
                />
                <button onClick={submit}>Submit</button>
            </div>
        );
    };

    export default Iconfile;
