import React, { createContext, useContext, useState } from 'react'

const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

const DrawerUiContext = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [showSearchBox, setshowSearchBox] = useState(false)
    const [settingDrawerOpen, setSettingDrawerOpen] = useState(false)
    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox,
        setshowSearchBox,
        settingDrawerOpen,
        setSettingDrawerOpen
    }
    return (
        <UIContext.Provider value={value}>{children}</UIContext.Provider>
    )
}

export default DrawerUiContext