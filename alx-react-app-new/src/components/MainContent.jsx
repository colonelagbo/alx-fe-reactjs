import React from 'react';

function MainContent(props) {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f9f9f9', margin: '20px auto', maxWidth: '800px', borderRadius: '10px' }}>
      {props.children}
    </main>
  );
}

export default MainContent;
