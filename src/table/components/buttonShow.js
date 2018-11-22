import React from 'react';
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown, faAngleUp)

function ButtonShow(props) {
  return (
    <td>
      <ButtonToolbar>
        <Button
          bsStyle={props.bsStyle}
          onClick={props.handleClick}>
          <FontAwesomeIcon
            icon={props.iconName}
          />
        </Button>
      </ButtonToolbar>
    </td>
  )
}

export default ButtonShow
