class Solution {
public:
    int maxi=INT_MIN;
    int calc(TreeNode *root){
         if(!root)
            return 0;
        int l=max(calc(root->left),0);
        int r=max(calc(root->right),0);
        maxi=max(maxi,l+r+root->val);
        return  max(l+root->val,r+root->val);
    }
    int maxPathSum(TreeNode* root) {
       calc(root);
        return maxi;
    }
};