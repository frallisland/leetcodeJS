/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stk=[];
    while(root!=null || stk.length){
        while(root){
            stk.push(root);
            root=root.left;
        }
        root=stk.pop();
        k--;
        if(k===0) break;
        root=root.right;
    }
    return root.val;
};