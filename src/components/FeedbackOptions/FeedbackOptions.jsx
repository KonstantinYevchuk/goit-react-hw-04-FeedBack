import PropTypes from 'prop-types';
import { List, Button } from "./FeedbackOptions.styled";

export function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <List>
        {options.map(option => (
          <li key={option}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
            </li>
        ))}
      </List>
    );
  }

  FeedbackOptions.propTyped = {
    options: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  }