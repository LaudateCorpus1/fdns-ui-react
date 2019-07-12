import React, { ReactNode } from 'react';

// Importing third party and local styles/icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
import './styles/fdns-ui-react.scss';
import 'animate.css/animate.css';
import 'flexbox/css/grid.min.css';
import 'flexbox/css/media-object.min.css';
import 'react-virtualized/styles.css';

const StyleGuideWrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
};

export default StyleGuideWrapper;