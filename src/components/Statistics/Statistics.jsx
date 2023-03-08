import PropTypes from 'prop-types';
import { Container, Item, Text } from './Statistics.styled';
export const Statistics = ({good, neutral, bad, total, positive}) => {
    return (
        <Container> 
            <ul>
            <Item>
                <Text>
                Good: {good}
                </Text> 
            </Item>     
            <Item> 
                <Text>
                Neutral: {neutral}
                </Text>
            </Item>
            <Item> 
                <Text>
                    Bad: {bad}
                </Text> 
            </Item>
            <Item> 
                <Text>
                Total: {total}
                </Text>
            </Item>
            {positive > 0 ? 
            <Item> 
                <Text>Positive feedback: {positive}%</Text>
            </Item> : 
            <Item>
                <Text>Positive feedback: 0</Text>
                </Item>}
            </ul>
        </Container>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}


