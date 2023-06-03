import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHome, FaPlusCircle, FaCoins, FaChartBar, FaWrench } from 'react-icons/fa';

const SidePanel = () => {
    return (
        <Sidebar
            defaultCollapsed={true}
            collapsed={true}
            height={screen.height}
            backgroundColor="#212529"
        >
            <Menu>
                <MenuItem
                    icon={<FaHome
                        size={20}
                        color="#0ea5e9"
                    />}
                    className="border-none"
                />
                <MenuItem
                    icon={<FaPlusCircle
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    icon={<FaCoins
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    icon={<FaChartBar
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    icon={<FaWrench
                        size={20}
                        color="#0ea5e9"
                    />}
                />
            </Menu>
        </Sidebar>
    );
}

export default SidePanel;