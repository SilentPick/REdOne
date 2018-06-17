/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import Router from '../../routes/router'

import '../../styles/forms.css';
import '../../styles/layout.css';
import '../../styles/style.css';
import '../../styles/type.css';
import '../../styles/buttons.css';
import '../../styles/tables.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default function App() {
  return (
    <Router />
  );
}
