import PropTypes from 'prop-types';
import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notofication/Notification';


export class Feedback extends Component {
    static defaultProps = {
        initial: 0
    }
    static propTypes = {
        initial: PropTypes.number.isRequired
    
    }
    state = {
        good: this.props.initial,
        neutral: this.props.initial,
        bad: this.props.initial,
      }
    clickButton = e => {
        const option = e.target.name;
        this.setState((prevState) => ({
          [option]: prevState[option] + 1,
        }));
      };
    
    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    }
        
    countPositiveFeedbackPercentage = () => this.state.good * 100 / this.countTotalFeedback();

    render() {
        const totalFeedback = this.countTotalFeedback();
        const totalPercent = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);
        return (
            
            <div>
            <Section title="Please leave feedback"/>
            <FeedbackOptions options={options} onLeaveFeedback={this.clickButton} />
            <Section/>
            <Section title="Statistics">
            { totalFeedback > 0 ? (
            <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={totalFeedback} 
            positive={totalPercent} 
            />) : (<Notification message="There is no feedback" />  )}
            
            </Section>
            </div>
            
        )
    }
}


// handleClickGood = () => {
//     this.setState(prevState => ({
//         good: prevState.good + 1,
//         }))
// }
// handleClickNeutral = () => {
//     this.setState(prevState => ({
//         neutral: prevState.neutral + 1,
//         }))
// }
// handleClickBad = () => {
//     this.setState(prevState => ({
//         bad: prevState.bad + 1,
//         }))
// }