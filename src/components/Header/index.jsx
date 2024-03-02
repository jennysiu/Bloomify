import React from 'react';


const Header = () => {
  return (
    <div class="page-header">
      {/* */}
      <h1>Bloomify</h1>

      <Header
        style={{
            padding: 0,
            background: '#1DA57A', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <h1 style={{ color: 'white', textAlign: 'center' }}>Bloomify</h1> 
      </Header>

      <Content
                    style={{
                        margin: '0 16px',
                    }}
                > 
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        My plants
                    </div> 
                </Content>
    </div>
  );
};

export default Header;
