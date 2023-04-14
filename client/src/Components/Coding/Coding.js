import {useState,useEffect,useRef} from 'react'
import './Coding.css'
import { Lines } from 'react-preloaders';
import axios from 'axios';
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, Title, Legend, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip} from 'chart.js'
ChartJS.register(Title, Legend, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip)


const monthName = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Coding = () => {

  //Fetch Leetcode stats
  const[profile,setProfile]=useState([]);
  const [Xaxis, setXaxis]=useState();
  const [Yaxis, setYaxis]=useState();
  const [contestName, setContestName]=useState();
  const [rank, setRank]=useState();
  const [data, setData]= useState()

  //Fetch codeforces stats
  const[profile2,setProfile2]=useState([]);
  const [Xaxis2, setXaxis2]=useState([]);
  const [Yaxis2, setYaxis2]=useState([]);
  const [contestName2, setContestName2]=useState([]);
  const [rank2, setRank2]=useState([]);
  const [data2, setData2]= useState()

  const chartRef = useRef();

// useEffect(() => {
//   console.log("App rendered");
// }, [])


  useEffect(()=>{
    const getProfile = async () => {
      // Fetch Leetcode stats
      let leetcodeData = JSON.parse(localStorage.getItem('leetcode'));
      const leetcodeTimestamp = localStorage.getItem('leetcodeTimestamp');
      if (!leetcodeData || Date.now() - leetcodeTimestamp >30000) {
        const response = await axios.get('https://ayushman-sinha-yc4d.vercel.app/api/routes/leetcode');
        leetcodeData = response.data;
        localStorage.setItem('leetcode', JSON.stringify(response.data));
        localStorage.setItem('leetcodeTimestamp', Date.now());
      }
      setProfile(leetcodeData);
    
      // Fetch Codeforces stats
      let codeforcesData = JSON.parse(localStorage.getItem('codeforces'));
      const codeforcesTimestamp = localStorage.getItem('codeforcesTimestamp');
      if (!codeforcesData || Date.now() - codeforcesTimestamp > 30000) {
        const response2 = await axios.get('https://ayushman-sinha-yc4d.vercel.app/api/routes/leetcode/codeforces');
        codeforcesData = response2.data;
        localStorage.setItem('codeforces', JSON.stringify(response2.data));
        localStorage.setItem('codeforcesTimestamp', Date.now());
      }
      setProfile2(codeforcesData);
    };
    
    getProfile();
  },[]);
  //Fire this useEffect only when profile is updated
  useEffect(() => {
    console.log("UseEffect 2");
    if(profile.data){
      const xaxis = [];
      const yaxis = [];
      const contestNameArr = [];
      const rankArr = [];
      let flag=false;
      console.log("UseEffect 2a");
        for(let i=0;i<profile.data.userContestRankingHistory.length;i++){
          if(profile.data.userContestRankingHistory[i].contest.startTime===1632623400)
            flag=true;
          //console.log(profile.data.userContestRankingHistory[i].rating);
          if(flag===true){
            let date = new Date(profile.data.userContestRankingHistory[i].contest.startTime*1000);
            let newDate = monthName[date.getMonth()] + "," + date.getFullYear();
           
            // setXaxis((Xaxis)=>[...Xaxis,profile.data.userContestRankingHistory[i].rating]);            
            // setYaxis((Yaxis)=>[...Yaxis,newDate]);
            // setContestName((contestName)=>[...contestName,profile.data.userContestRankingHistory[i].contest.title]);
            // setRank((rank)=>[...rank,profile.data.userContestRankingHistory[i].ranking]);
            xaxis.push(profile.data.userContestRankingHistory[i].rating);
            yaxis.push(newDate);
            contestNameArr.push(profile.data.userContestRankingHistory[i].contest.title);
            rankArr.push(profile.data.userContestRankingHistory[i].ranking);
          }
          
        }
        setXaxis(xaxis);
        setYaxis(yaxis);
        setContestName(contestNameArr);
        setRank(rankArr);
        setData(
          {
            labels:yaxis,
            datasets:[
              {
                label:"My Leetcode Ratings",
                data:xaxis,
                backgroundColor:'false',
                borderColor:'#fa1776',
                tension:0.4,                              
                pointStyle:'false',
                pointBorderColor:'rgba(0, 0, 0, 0.01)',
                pointBackgroundColor:'rgba(0, 0, 0, 0.01)',
                showLine:true
              }
            ]
          }
        )

       
    }
  }, [profile]);

  useEffect(() => {
    if(profile2.length>0){
      const xaxis2 = [];
      const yaxis2 = [];
      const contestNameArr2 = [];
      const rankArr2 = [];

      for(let i=0;i<profile2[0].result.length;i++){
        let date = new Date(profile2[0].result[i].ratingUpdateTimeSeconds*1000);
        let newDate = monthName[date.getMonth()] + "," + date.getFullYear();
        // setXaxis2((Xaxis2)=>[...Xaxis2,profile2[0].result[i].newRating]);
        // setYaxis2((Yaxis2)=>[...Yaxis2,newDate]);
        // setContestName2((contestName2)=>[...contestName2,profile2[0].result[i].contestName]);
        // setRank2((rank2)=>[...rank2,profile2[0].result[i].rank]);

        xaxis2.push(profile2[0].result[i].newRating);
        yaxis2.push(newDate);
        contestNameArr2.push(profile2[0].result[i].contestName);
        rankArr2.push(profile2[0].result[i].rank);

      }
      setData2({
        labels:yaxis2,
        datasets:[{
          label:"My Codeforces Ratings",
          color: '#666',
          data:xaxis2,
          backgroundColor:'none',
          borderColor:'#fa1776',
          tension:0.4,          
          pointStyle:'false',
          pointBorderColor:'rgba(0, 0, 0, 0.1)',
          pointBackgroundColor:'rgba(0, 0, 0, 0.01)',
          showLine:true          
        }]

      })
    
    }
    
      
  }, [profile2]);



 const options={
    responsive:true,
    plugins:{
      legend:{
        display:false
      },
      title:{
        display:true,
      },
      tooltip:{
        mode:'index',
        intersect:false,
        callbacks:{
          label:function(context){
            let con_name=(contestName[context.dataIndex]);            
            let rating_cur = context.dataset.data[context.dataIndex];
            return con_name + " : " + rating_cur + rank[context.dataIndex] ;
          },
          footer:function(context){
            let rank_cur = rank[context[0].dataIndex];
            if( rank_cur === 0) return "Rank : Not Participated";
            return "Rank : " + rank_cur;
          }

        }
      }},
      scales:{
        x:{
          ticks:{
            color : 'rgb(197, 197, 197) '
          }
        },
        y:{
          ticks:{
            color : 'rgb(197, 197, 197) '
          }
        }
      }
    
 }
  const options2={
    responsive:true,
    plugins:{
      legend:{
        display:false
      },
      title:{
        display:true,
      },
      tooltip:{
        mode:'index',
        intersect:false,
        callbacks:{
          label:function(context){
            let con_name=(contestName2[context.dataIndex]);            
            
            return con_name  ;
          },
          footer:function(context){
            let rank_cur = rank2[context[0].dataIndex];
            if( rank_cur === 0) return "Rank : Not Participated";
            return "Rank : " + rank_cur;
          }
        }
      }
      
    },
    scales:{
      x:{
        ticks:{
          color : 'white'
        }
      },
      y:{
        ticks:{
          color : 'white'
        }
      }
    }
   
  }
  const formatDate=(date)=>{
    //console.log(date);
    let newDate = new Date(date*1000);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let time = newDate.toLocaleTimeString();
    return day + "/" + month + "/" + year + " at " + time;
  }
  return (
    <div className='main_container_coding'> 
      {profile.data&&profile2.length>0?<div className='main_container_coding_inner'>
      <div className='leetcode_container'>
            <div className='leetcode_heading'>Leetcode</div>
              {data&&<Line data={data} options={options}/>}  
              <div className='leetcode_description'>
                 <div className='left_column_leetcode'>
                    <div className='leetcode_stats_label'>Current Rating : <div className='leetcode_stats_text'> {profile.data&&(profile.data.userContestRanking.rating).toFixed(2)}</div></div>
                    <div className='leetcode_stats_label'>Number of attended contests : <div className='leetcode_stats_text'> {profile.data&&profile.data.userContestRanking.attendedContestsCount} </div></div>
                    <div className='leetcode_stats_label'>Global Ranking : <div className='leetcode_stats_text'>{profile.data&&profile.data.userContestRanking.globalRanking} </div></div>
                    <div className='leetcode_stats_label'>I am among the top <div className='leetcode_stats_text'> {profile.data&&profile.data.userContestRanking.topPercentage}% </div> users</div>
                 </div>
                 <div className='right_column_leetcode'>
                    <div className='leetcode_stats_label'>Total Questions solved : <div className='leetcode_stats_text'>{profile.data&&profile.data.matchedUser.submitStats.acSubmissionNum[0].count}</div> </div>
                    <div className='easy_color'>Easy : <div className='leetcode_stats_text'>{profile.data&&profile.data.matchedUser.submitStats.acSubmissionNum[1].count}</div></div>
                    <div className='medium_color'>Medium : <div className='leetcode_stats_text'> {profile.data&&profile.data.matchedUser.submitStats.acSubmissionNum[2].count} </div></div>
                    <div className='hard_color'>Hard : <div className='leetcode_stats_text'> {profile.data&&profile.data.matchedUser.submitStats.acSubmissionNum[3].count} </div></div>
                 </div>
              </div>

    </div>
    <div className='codeforces_container'>
            <div className='leetcode_heading'>Codeforces</div>
            {data2&&<Line data={data2} options={options2}/>}
            <div className='codeforces_description'>
                  <div className='left_column_codeforces'>
                    <div className='leetcode_stats_label'>Current Rating : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].rating:<></>}</div></div>
                    <div className='leetcode_stats_label'>Rank : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].rank:<></>} </div></div>
                    <div className='leetcode_stats_label'>Maximum Rating : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].maxRating:<></>}</div></div>
                    <div className='leetcode_stats_label'>Maximum Rank : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].maxRank:<></>}</div></div>
                  </div>
                  <div className='right_column_codeforces'>
                    <div className='leetcode_stats_label'>Last Online : <div className='leetcode_stats_text'> {profile2.length>0?formatDate(profile2[1].result[0].lastOnlineTimeSeconds):<></>}</div></div>
                    <div className='leetcode_stats_label'>Registration Time : <div className='leetcode_stats_text'> {profile2.length>0?formatDate(profile2[1].result[0].registrationTimeSeconds):<></>}</div></div>
                    <div className='leetcode_stats_label'>Contribution : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].contribution:<></>}</div></div>
                    <div className='leetcode_stats_label'>Friend of Count : <div className='leetcode_stats_text'> {profile2.length>0?profile2[1].result[0].friendOfCount:<></>}</div></div>
                  </div>
            </div>
    </div>   
      </div>:<div className='loading_text'>Loading....</div>}
    </div>
  )
}

export default Coding;
/* 
 for(let i=0;i<profile.length;i++){
        console.log(profile[i].userContestRankingHistory[i].rating);
        setXaxis((Xaxis)=>[...Xaxis,profile[i].userContestRankingHistory[i].rating]);
        setYaxis((Yaxis)=>[...Yaxis,profile[i].userContestRankingHistory[i].contest.startTime]);
  }



for(let i=0;i<response.data.length;i++){         
          setXaxis((Xaxis)=>[...Xaxis,response.data.data.userContestRankingHistory[i].rating]);
          setYaxis((Yaxis)=>[...Yaxis,response.data.data.userContestRankingHistory[i].contest.startTime]);          
        }

   https://codeforces.com/api/user.info?handles=ayushman_sinha
   https://codeforces.com/api/user.rating?handle=ayushman_sinha     



   <div className='leetcode_container'>
            <div className='leetcode_heading'>Leetcode</div>
              {data&&<Line data={data} options={options}/>}  
              <div className='leetcode_description'>
                 <div>Current Rating : 1785</div>
                 <div>Number of attended contests : 72</div>
              </div>          
    </div>
*/