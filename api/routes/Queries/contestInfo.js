const url = `https://leetcode.com/graphql?query=query
{    
  userContestRanking(username: "ayushman_sinha") {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }
  userContestRankingHistory(username: "ayushman_sinha") {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
  recentSubmissionList(username:"ayushman_sinha") {
    title
    titleSlug
    timestamp
    statusDisplay
    lang
    __typename
    }
    matchedUser(username: "ayushman_sinha"){
      submitStats: submitStatsGlobal {
                    acSubmissionNum {
                      difficulty
                      count
                      submissions
                        __typename
                    }
                    totalSubmissionNum {
                      difficulty
                      count
                      submissions
                       __typename
                      }
                     __typename
        }
    }    
} `;
module.exports = url;

/*
"https://leetcode.com/graphql?query=query{
    recentSubmissionList(username:"ayushman_sinha") {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
        __typename
        }
        languageList {
             id
             name
             verboseName
              __typename
            }
          }
        "
          "https://leetcode.com/graphql?query=query{
              allQuestionsCount {
                difficulty
                count
                 __typename
              }
              matchedUser(username: "ayushman_sinha") {
                username
                socialAccounts
                githubUrl
                contributions{
                  points
                  questionCount
                  testcaseCount
                  __typename
                }
                profile{
                  realName
                  websites
                  countryName
                  skillTags
                  company
                  school
                  starRating
                  aboutMe
                  userAvatar
                  reputation
                  ranking
                   __typename
                }
                submissionCalendar
                submitStats: submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                    submissions
                      __typename
                  }
                  totalSubmissionNum {
                    difficulty
                    count
                    submissions
                     __typename
                    }
                   __typename
                  }
                  badges {
                    id
                    displayName
                    icon
                    creationDate
                    medal {
                      slug
                      config {
                        icon
                        iconGif
                        iconGifBackground
                        iconWearing
                        __typename
                      }
                      __typename
                    }
                     __typename
                    }
                     upcomingBadges {
                       name
                       icon
                       __typename
                      }
                      activeBadge {
                        id
                         __typename
                        }
                          __typename
                        }
                      }"



https://leetcode.com/graphql?query=query{
  matchedUser(username: "ayushman_sinha"){
    submitStats: submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                    submissions
                      __typename
                  }
                  totalSubmissionNum {
                    difficulty
                    count
                    submissions
                     __typename
                    }
                   __typename
      }
  }
}

*/