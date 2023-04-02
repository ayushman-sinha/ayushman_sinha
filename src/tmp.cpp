#include <bits/stdc++.h>
#define int long long
using namespace std;
const int mod=1e9+7;

signed main(){
    int t;
    int m=1e5+5;
    vector<int>fact(m);
    fact[0]=1;
    for(int i=1;i<m;i++){
        fact[i]=(fact[i-1]*i);
        fact[i]%=mod;
    }
    cin>>t;
    while(t--){       
        int n;
        cin>>n;
        int ans=n*(n-1);
        ans%=mod;
        ans=(ans*fact[n])%mod;
        cout<<ans<<endl;
    }
}

















// #include <bits/stdc++.h>
// using namespace std;
// bool calc(vector<int>g[],int n,int src,int dest,int x,int y){
//     queue<int>q;
//     q.push(src);
//     vector<bool>visited(n,false);
//     while(!q.empty()){
//         int u=q.front();
//         q.pop();
//         for(auto j:g[u]){
//             if(!visited[j]){
//                 if(u==x && j==y){
//                     continue;
//                 }
//                 if(j==dest){
//                     return true;
//                 }
//                 visited[j]=true;
//                 q.push(j);
//             }
//         }
//     }
//     return false;
// }
// bool calc1(vector<int>g[],int n,int src,int dest,int x){
//     queue<int>q;
//     q.push(src);
//     vector<bool>visited(n,false);
//     while(!q.empty()){
//         int u=q.front();
//         q.pop();
//         if(u==x){
//             continue;
//         }
//         for(auto j:g[u]){
//             if(!visited[j]){
//                 if(u==x)
//                     continue;                
//                 if(j==dest){
//                     return true;
//                 }
//                 visited[j]=true;
//                 q.push(j);
//             }
//         }
//     }
//     return false;

// }
// int main(){
// //    int n,e,qSize;
// //     cin>>n>>e;
// //     vector<int>g[n+1];
// //     for(int i=0;i<e;i++){
// //         //cout<<"Enter the edges"<<endl;
// //         int u,v;
// //         cin>>u>>v;
// //         g[u].push_back(v);
// //         g[v].push_back(u);
// //     }
// //     cout<<"Enter the number of queries"<<endl;
// //     cin>>qSize;
// //     for(int i=0;i<qSize;i++){
// //         int qType;int a,b,c,d;
// //         cin>>qType;
// //         bool ans;
// //         if(qType==1){            
// //             cin>>a>>b>>c>>d;
// //             ans=calc(g,n,a,b,c,d);
// //         }
// //         else if(qType==2){
// //             cin>>a>>b>>c;
// //             ans=calc1(g,n,a,b,c);
// //         }
// //         if(ans){
// //             cout<<"YES"<<endl;
// //         }
// //         else{
// //             cout<<"NO"<<endl;
// //         }

//     }
// }
// /**
   int c=0;int div=0;
        for(int i=1;i<=children;i++){
            int cur_group=i*8;
            int rest_group=money-cur_group;
            
            if(rest_group<(children-i)||(rest_group==4&&(children-i)==1)) break;
            if(rest_group>0&&i==children) break;
            c=i;
            
        }
        return c;

// 13 15
// 1 2
// 2 3
// 3 5
// 2 4
// 4 6
// 2 6
// 1 4
// 1 7
// 7 8
// 7 9
// 7 10
// 8 11
// 8 12
// 9 12
// 12 13
// 5
// 1 5 13 1 2
// 1 6 2 1 4
// 1 13 6 7 8
// 2 13 6 7
// 2 13 6 8
 
//  */