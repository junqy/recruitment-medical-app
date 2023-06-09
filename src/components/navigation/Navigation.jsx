import { Drawer, Grid } from "antd";
import AppMenu from "../app_menu/AppMenu";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./styles.css"

const { useBreakpoint } = Grid;

function Navigation() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const breakpoints = useBreakpoint();

    return (
        <>
            {!breakpoints.md ? (
                <div className="icon-container">
                    <MenuOutlined className="hamburger-icon" onClick={() => setOpenDrawer(true)}/>
                </div>
            ) : (
                <AppMenu />
            )}
            <Drawer
                open={openDrawer}
                closable={false}
                onClose={() => setOpenDrawer(false)}
                width="75%"
                style={{backgroundColor: "#323031"}}
            >
                <AppMenu isDrawer={true} />
            </Drawer>
        </>
    );
}

export default Navigation;
