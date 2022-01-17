import React, {useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Menu from "./Menu";

const BottomDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    // Wrapped in an extra div for click functionality for desktop friendliness
    <div 
      onClick={!open ? toggleDrawer(true): null}
      className="bottom-drawer"
    >
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        BackdropProps={{ 
            // invisible: true,
            // background: 'transparent'
        }}
        // disableBackdropTransition
      >
        {/* // AREA VISIBLE WHEN DRAWER IS CLOSED */}
        <div style={styles.peek} onClick={open ? toggleDrawer(false): null}>
            <div style={styles.puller}/>
            <p className={`menu-title menu-title-${open ? "open" : "closed"}`}>Menu</p>
        </div>

        {/* AREA NOT VISIBLE WHEN DRAWER IS CLOSED */}
        <div className="drawer-area">
          <Menu />
        </div> 
      </SwipeableDrawer>
    </div>
  );
}

const drawerBleeding = 80;

const styles = {
    peek: {
        position: 'absolute',
        top: -drawerBleeding,
        height: drawerBleeding,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        visibility: 'visible',
        right: 0,
        left: 0,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px -10px 10px 1px rgba(0, 0, 0, 0.13)',   
        textAlign: 'center',
        border: "none"
    },
    puller: {
        width: 40,
        height: 6,
        backgroundColor: "#e0e0e0",
        borderRadius: 3,
        position: 'absolute',
        top: 15,
    },
}

export default BottomDrawer;