#include <bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if(b>d){
            cout<<"-1"<<endl;
            continue;
        }
        int x=a+d-b;
        if(x<c){
            cout<<"-1"<<endl;
            continue;
        }
        x=(d-b)+abs(x-c);
        cout<<x<<endl;
    }