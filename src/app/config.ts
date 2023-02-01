export const query = `query {
  activeDailyCodingChallengeQuestion {
      date
      link
      question {
          questionId
          questionFrontendId
          title
          difficulty
          likes
          dislikes
          acRate
      }
  }
}`;

export const url = `https://leetcode.com/graphql/`;
export const corsProxy = `https://tushar-kj-cors-render-com.onrender.com/`;
