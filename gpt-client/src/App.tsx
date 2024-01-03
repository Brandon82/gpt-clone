import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { SidePane } from './panes/SidePane';
import { SettingsPane } from './panes/SettingsPane';
import { MainPane } from './panes/MainPane';
import { ConfigProvider, theme } from 'antd';
import './App.scss';

const App: React.FC = () => {
  const {state} = useContext(GPTContext);

  return (
    // TODO: Import colors from _variables.scss
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        // Global Theme
        token: { 
          fontFamily: 'Open Sans, sans-serif',
          colorBgLayout: '#2f2f39',
          colorBgContainer: '#2f2f39',
        },
        // Component Themes
        components: {
          Segmented: {
            itemSelectedBg: '#525275',
          },
          Select: {
            optionSelectedBg: '#373740',
            optionSelectedFontWeight: 'initial',
          },
        }
      }}
    >
      <div className="App">
        <SidePane/>
        {state.activePane === 'chat' || state.activePane === 'image' ? <MainPane/> : <SettingsPane/>}
      </div>
    </ConfigProvider>
  );
}

export default App;