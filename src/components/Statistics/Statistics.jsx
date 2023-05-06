import {
  StatsList,
  StatsListItem,
  StatsFeedbackCounter,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatsList>
      <StatsListItem key="good">
        Good: <StatsFeedbackCounter>{good}</StatsFeedbackCounter>
      </StatsListItem>{' '}
      <StatsListItem key="neutral">
        Neutral: <StatsFeedbackCounter>{neutral}</StatsFeedbackCounter>
      </StatsListItem>{' '}
      <StatsListItem key="bad">
        Bad: <StatsFeedbackCounter>{bad}</StatsFeedbackCounter>
      </StatsListItem>
      <StatsListItem>
        Total: <StatsFeedbackCounter>{total}</StatsFeedbackCounter>
      </StatsListItem>
      <StatsListItem>
        Positive feedback:{' '}
        <StatsFeedbackCounter>
          {positiveFeedbackPercentage}%
        </StatsFeedbackCounter>
      </StatsListItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.string.isRequired,
};
