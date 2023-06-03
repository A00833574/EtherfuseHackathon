import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaPlusCircle, FaCoins, FaChartBar, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                    component={<Link to="/index"/>}
                    icon={<FaHome
                        size={20}
                        color="#0ea5e9"
                    />}
                    className="border-none"
                />
                <MenuItem
                    component={<Link to=""/>}
                    icon={<FaPlusCircle
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    component={<Link to=""/>}
                    icon={<FaCoins
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    component={<Link to=""/>}
                    icon={<FaChartBar
                        size={20}
                        color="#0ea5e9"
                    />}
                />
                <MenuItem
                    component={<Link to="/settings" />}
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