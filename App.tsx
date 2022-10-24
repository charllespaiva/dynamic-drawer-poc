import * as React from 'react';
import { useState } from 'react';

import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';

export default function App() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  }; 
  
  return (
    <div>
      <Button type="primary" onClick={() => showDrawer()}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
